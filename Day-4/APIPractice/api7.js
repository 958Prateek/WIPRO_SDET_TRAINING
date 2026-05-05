fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  .then(res => res.json())
  .then(data => data.meals)
  .then(data => data.filter(m => m.strCategory === "Chicken"))
  
  .then(data => data.map(m => ({
    name: "Prateek " + m.strMeal,
    category: m.strCategory
  })))

  .then(data => console.log(data))
  .catch(err => console.error(err));