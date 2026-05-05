fetch("https://openlibrary.org/search.json?q=harry+potter")
  .then(res => res.json())

  .then(data => data.docs)
  .then(data => data.filter(b => b.first_publish_year > 2000))
  .then(data => data.map(b => ({
    title: "Prateek " + b.title,
    year: b.first_publish_year
  })))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));