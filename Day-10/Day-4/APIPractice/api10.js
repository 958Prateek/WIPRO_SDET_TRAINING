fetch("https://api.tvmaze.com/shows")
  .then(res => res.json())
  .then(data => data.filter(show => show.rating.average > 8)) // filter (rating > 8)

  .then(data => data.map(show => ({
    name: "Prateek " + show.name,
    rating: show.rating.average
  })))

  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));