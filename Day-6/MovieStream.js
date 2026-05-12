const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"

];
let movies = [];

rawMovies.forEach(movie => {
     let parts = movie.split("|");
     let name = parts[0];
     let genre = parts[1];
     let views = Number(parts[2]) || 0;

     let movieObj ={
          name: name,
          genre: genre,
          views: views
     };

     movies.push(movieObj);

});
let filteredMovies = movies.filter(movie => {
     return (
          (
               movie.genre === "Action" ||
               movie.genre === "Sci-Fi") &&
               movie.views > 5000
     );
});

filteredMovies.sort((a, b) => {
     return b.views - a.views;
});
let result = JSON.stringify(filteredMovies, null, 2);

console.log(result);