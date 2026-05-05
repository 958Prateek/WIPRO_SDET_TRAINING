// function getData() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);

//     });
// }

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// // setTimeout example
// setTimeout(() => {
//     console.log("Data received after 5 seconds");
// }, 5000);

// setInterval example
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);

function getData() {
    return new Promise((resolve, reject) => {
        if (2 > 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject("not working");
        }
    });
}

//Fetch API Chain
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json()) //covert response to json
.then(data => data.filter(d => d.id % 2 === 0)) // filter even ids
.then(data => data.map(d =>(d.title = "Prateek" + d.title))) // mpdify
.then(data => console.log(data)) //print result
.catch(error => console.error("Error fetching data :", error));


// //Calling getData()

// getData() 
//      .then(data => {
//           console.log("getData success :", data);
//      })
//      .catch(error => {
//           console.error("getData error:" , error);
//      });



// // synchronous log
// console.log("test");



