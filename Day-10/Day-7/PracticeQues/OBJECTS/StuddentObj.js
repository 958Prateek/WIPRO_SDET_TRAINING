const student = {
    name: "Prateek",
    age: 22,
    course: "IT"
};
for (const key in student) {
    console.log(key + " : " + student[key]);
}