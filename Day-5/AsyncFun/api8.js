async function getJokes() {

  try {

    let res = await fetch("https://official-joke-api.appspot.com/jokes/ten");

    let data = await res.json();

    data = data.filter(j => j.type === "programming");

    data = data.map(j => ({
      joke: "Prateek " + j.setup,
      punchline: j.punchline
    }));

    console.log(data);

  } catch (err) {

    console.error(err);

  }
}

getJokes();

// fetch("https://official-joke-api.appspot.com/jokes/ten")
// .then(res => res.json()) 
// .then(data => data.filter(j => j.type === "programming"))   // filter (only programming jokes)
// .then(data => data.map(j => ({
//      joke: "Prateek " + j.setup,
//      punchline: j.punchline
// })))

// .then(data => console.log(data))
// .catch(err => console.error(err));