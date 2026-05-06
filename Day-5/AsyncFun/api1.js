async function getUniversities() {

  try {

    let res = await fetch("http://universities.hipolabs.com/search?country=India");

    let data = await res.json();

    data = data.filter(u => u.name.includes("Institute"));

    data = data.map(u => ({
      name: "Prateek " + u.name,
      country: u.country
    }));

    console.log(data);

  } catch (err) {

    console.error("Error:", err);

  }
}

getUniversities();