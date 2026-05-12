// Object Mutation through References

const user1 = {
     city: "Pune"
};
const user2 = user1;
user2.city = "Mumbai"
console.log(user1.city);
console.log(user2.city);