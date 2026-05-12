async function getMeals() {

  try {

    let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");

    let data = await res.json();

    data = data.meals;

    data = data.filter(m => m.strCategory === "Chicken");

    data = data.map(m => ({
      name: "Prateek " + m.strMeal,
      category: m.strCategory
    }));

    console.log(data);

  } catch (err) {

    console.error(err);

  }
}

getMeals();


// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
//   .then(res => res.json())
//   .then(data => data.meals)
//   .then(data => data.filter(m => m.strCategory === "Chicken"))
  
//   .then(data => data.map(m => ({
//     name: "Prateek " + m.strMeal,
//     category: m.strCategory
//   })))

//   .then(data => console.log(data))
//   .catch(err => console.error(err));