fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(data => data.data)
  .then(data => data.filter(f => f.length < 100))
  .then(data => data.map(f => "Prateek " + f.fact))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));