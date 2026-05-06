class Student {
     constructor(name, age, course) {
          this.name = name;
          this.age= age;
          this.course=course;
     }
     displayInfo () {
          console.log(
               `${this.name} is ${this.age} years old and studies ${this.course}.`
          );
     }
}
const student1 = new Student(
     "Prateek",
     22,
     "Information Technology"
);
student1.displayInfo();