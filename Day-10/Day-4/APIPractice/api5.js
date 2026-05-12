fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => Object.keys(data.message)) // convert object → array of breed names
  .then(data => data.filter(breed => breed.startsWith("b"))) // filter (breeds starting with 'b')
  .then(data => data.map(breed => "Prateek " + breed))
  .then(data => console.log(data))
  .catch(err => console.error(err));