async function getBooks() {
  try{
    let res = await fetch("https://openlibrary.org/search.json?q=harry+potter");
    let data = await res.json();
    data = data.docs;
    data = data.filter(b => b.first_publish_year > 2015);
    data = data.map(b=> ({
      title: "Prateek " + b.title,
      year: b.first_publish_year
    }));

    console.log(data);
  } catch(err) {
    console.error("Error:", err);
  }
}
getBooks();