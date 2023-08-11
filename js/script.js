function Student(name, lastName, birthY, grades = []){
    this.name = name;
    this.lastName = lastName;
    this.birthY = birthY;
    this.grades = grades;
    this.lessonsCount = 25;
    this.journal = new Array(this.lessonsCount);
    this.currentPlace = 0;
    this.presentCount = 0;

    this.getAge = function (){
            const date = new Date();
            const year = date.getFullYear();
            return year - this.birthY;
        }
    this.averageGrade = function(){
            let sum = 0;
            this.grades.forEach(grade => {
                sum += grade;
            });
            return sum/this.grades.length;
        }
    this.averageAttendance = function(){
            return this.presentCount/this.lessonsCount;
        }

    this.present = function(){
        if(this.currentPlace < this.lessonsCount){
            this.journal[this.currentPlace] = true;
            this.currentPlace++;
            this.presentCount++;
        }
    };
    this.absent = function(){
        if(currentPlace < lessonsCount){
            journal[currentPlace] = false;
            currentPlace++;
        }
    }
    this.summary = function(){
        const avgGrade = this.averageGrade();
        const avgAttendance = this.averageAttendance();
        switch (true){
            case (avgGrade >= 90 && avgAttendance >= 0.9):
                return "Молодець!";
            case ((avgGrade < 90 && avgAttendance >= 0.9) || (avgGrade >= 90 && avgAttendance < 0.9)):
                return "Добре, але можна краще";
            case (avgGrade < 90 && avgAttendance < 0.9):
                return "Редиска!";
        }
    }

}

const student_0 = new Student('student_0', 'lastName_0', 1993, [89,89,89,89,89]);
const student_1 = new Student('student_1', 'lastName_1', 1983, [100,100,100,100,100,100]);
const student_2 = new Student('student_2', 'lastName_2', 1973, [90,90,90,90,90,90,90,90,90]);

console.log("STUDENT 0");
console.log("AGE:" + student_0.getAge());
console.log("Average grade:" + student_0.averageGrade());
for (let i = 0; i < 22; i++){
    student_0.present();
}
console.log("Average attendance:" + student_0.averageAttendance());
console.log("Summary after:" + student_0.summary());

console.log("STUDENT 1");
console.log("AGE:" + student_1.getAge());
console.log("Average grade:" + student_1.averageGrade());
for (let i = 0; i < 23; i++){
    student_1.present();
}
console.log("Average attendance:" + student_1.averageAttendance());
console.log("Summary after:" + student_1.summary());

console.log("STUDENT 2");
console.log("AGE:" + student_2.getAge());
console.log("Average grade:" + student_2.averageGrade());
for (let i = 0; i < 22; i++){
    student_2.present();
}
console.log("Average attendance:" + student_2.averageAttendance());
console.log("Summary after:" + student_2.summary());