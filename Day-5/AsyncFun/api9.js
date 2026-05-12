async function getUsers() {

  try {

    let res = await fetch("https://randomuser.me/api/?results=10");

    let data = await res.json();

    data = data.results;

    data = data.filter(u => u.gender === "male");

    data = data.map(u => ({
      name: "Prateek " + u.name.first,
      email: u.email
    }));

    console.log(data);

  } catch (err) {

    console.error(err);

  }
}

getUsers();

// fetch("https://randomuser.me/api/?results=10")
//   .then(res => res.json())
//   .then(data => data.results)

//   .then(data => data.filter(u => u.gender === "male"))

//   .then(data => data.map(u => ({
//     name: "Prateek " + u.name.first,
//     email: u.email
//   })))

//   .then(data => console.log(data))
//   .catch(err => console.error(err));

