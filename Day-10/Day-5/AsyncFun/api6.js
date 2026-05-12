async function getLaunches() {

  try {

    let res = await fetch("https://api.spacexdata.com/v4/launches");

    let data = await res.json();

    data = data.filter(l => l.success === true);

    data = data.map(l => ({
      mission: "Prateek " + l.name,
      year: new Date(l.date_utc).getFullYear()
    }));

    console.log(data);

  } catch (err) {

    console.error(err);

  }
}

getLaunches();

// fetch("https://api.spacexdata.com/v4/launches")
//   .then(res => res.json())

//   .then(data => data.filter(l => l.success === true))

//   .then(data => data.map(l => ({
//     mission: "Prateek " + l.name,
//     year: new Date(l.date_utc).getFullYear()
//   })))

//   .then(data => console.log(data))
//   .catch(err => console.error(err));