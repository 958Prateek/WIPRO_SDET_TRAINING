async function getCatFacts() {

  try {

    let res = await fetch("https://catfact.ninja/facts");

    let data = await res.json();

    data = data.data;

    data = data.filter(f => f.length < 100);

    data = data.map(f => "Prateek " + f.fact);

    console.log(data);

  } catch (err) {

    console.error("Error:", err);

  }
}

getCatFacts();