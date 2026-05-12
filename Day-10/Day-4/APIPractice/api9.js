// fetch("https://randomuser.me/api/?results=10")
//   .then(res => res.json())
//   .then(data => data.results) // extract array
//   .then(data => data.filter(user => user.gender === "female"))
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then(data => data.results)

  .then(data => data.filter(u => u.gender === "male"))

  .then(data => data.map(u => ({
    name: "Prateek " + u.name.first,
    email: u.email
  })))

  .then(data => console.log(data))
  .catch(err => console.error(err));

// fetch("https://restcountries.com/v3.1/all")
//   .then(res => res.json()) // convert response to JSON

//   // filter: countries with population > 50 million
//   .then(data => data.filter(c => c.population > 50000000))

//   // map: modify data
//   .then(data => data.map(c => ({
//     name: "Prateek " + c.name.common,
//     population: c.population,
//     region: c.region
//   })))

//   // print result
//   .then(data => console.log(data))

//   // error handling
//   .catch(error => console.error("Error fetching data:", error));