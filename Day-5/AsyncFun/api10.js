async function getShows() {

  try {

    let res = await fetch("https://api.tvmaze.com/shows");

    let data = await res.json();

    data = data.filter(show => show.rating.average > 8.5);

    data = data.map(show => ({
      name: "Prateek " + show.name,
      rating: show.rating.average
    }));

    console.log(data);

  } catch (err) {

    console.error("Error:", err);

  }
}

getShows();

// fetch("https://api.tvmaze.com/shows")
//   .then(res => res.json())
//   .then(data => data.filter(show => show.rating.average > 8)) // filter (rating > 8)

//   .then(data => data.map(show => ({
//     name: "Prateek " + show.name,
//     rating: show.rating.average
//   })))

//   .then(data => console.log(data))
//   .catch(err => console.error("Error:", err));