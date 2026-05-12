fetch("http://universities.hipolabs.com/search?country=India")
  .then(res => res.json())
  .then(data => data.filter(u => u.name.includes("Institute")))
  .then(data => data.map(u => ({
    name: "Prateek " + u.name,
    country: u.country
  })))

  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));