// fetch("https://dog.ceo/api/breeds/list/all")
//   .then(res => res.json())
//   .then(data => Object.keys(data.message)) // convert object → array of breed names
//   .then(data => data.filter(breed => breed.startsWith("b"))) // filter (breeds starting with 'b')
//   .then(data => data.map(breed => "Prateek " + breed))
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


async function getDogs() {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await res.json();
    data = Object.keys(data.message);
    data = data.filter(breed => breed.startsWith("b"));
    data = data.map(breed => "Dog " + breed);
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
getDogs();