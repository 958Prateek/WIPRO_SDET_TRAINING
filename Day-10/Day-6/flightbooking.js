// const rawFlights = [
//      "London-Paris: 150",
//      "New York-Tokyo: Invalid",
//      "Dubai-Mumbai:450",
//      "Berlin-Rome:95"
// ];

// const flights = [];
// rawFlights.forEach(flight => {
//      const parts = flight.split(":");
//      const route = parts[0];

//      let price = Number(parts[1]);

//      if (isNaN(price)) {
//           price = 0;
//      }
//      const cities = route.split("-");
//      const from = cities[0];
//      const to = cities[1];

//      const flightObj = {
//           from: from,
//           to: to,
//           price: price
//      };
//      flights.push(flightObj);
// });

// const filteredFlights = flights.filter(flight => {
//      return flight.price >= 100 &&
//             flight.price <= 500;

// });

// filteredFlights.sort((a, b) => {
//      return a.price - b.price;
// });

// const result = JSON.stringify(filteredFlights, null, 2);

// console.log(result);

const rawFlights = [
    "London-Paris:150",
    "Paris-Berlin:abc",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95",
    "India-Dubai:501"
];
function cleanFlightData(flights) {
    let cleanFlights = flights.map(flight => {
        const parts = flight.split(":");
        const route = parts[0];

        let price = Number(parts[1]);

        if (isNaN(price)) {
            price = 0;
        }

        const cities = route.split("-");
        const from = cities[0];
        const to = cities[1];
        return {
            from: from,
            to: to,
            price: price
        };

    });

    let finalFlights = cleanFlights.filter(flight => {
        return flight.price >= 100 &&
               flight.price <= 500;

    });

    finalFlights.sort((a, b) => {
        return a.price - b.price;
    });
    return JSON.stringify(finalFlights, null, 2);
}
const result = cleanFlightData(rawFlights);
console.log(result);