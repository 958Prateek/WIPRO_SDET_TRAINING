const rawFlights = [
     "London-Paris: 150",
     "New York-Tokyo: Invalid",
     "Dubai-Mumbai:450",
     "Berlin-Rome:95"
];

let flights = [];

rawFlights.forEach(flight => {
     let parts = flight.split(":");
     let route = parts[0];
     let price = Number(parts[1]) || 0;
     let cities = route.split("-");
     let from = cities[0];
     let to = cities[1];

     let flightObj = {
          from: from,
          to: to,
          price: price
     };
     flights.push(flightObj);

});


let filteredFlights = flights.filter(flight => {
     return flight.price >= 100 &&
            flight.price <= 500;
});

filteredFlights.sort((a, b) => {
     return a.price - b.price;
});

let result = JSON.stringify(filteredFlights, null, 2);

console.log(result);