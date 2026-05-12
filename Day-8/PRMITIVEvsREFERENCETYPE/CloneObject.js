// Question -- Clone Object Without Affecting Original
const user1 = {
     name : "Prateek",
     age: 22
};
const user2 = {...user1 };
user2.name = "Prateek";
console.log(user1);
console.log(user2);