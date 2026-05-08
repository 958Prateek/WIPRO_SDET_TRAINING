const rawFlights = [
"London-Paris:150",
"Paris-Berlin:abc",
"New York-Tokyo:invalid",
"Dubai-Mumbai:450",
"Berlin-Rome:95",
"India-Dubai:501"
];
 
function cleanFlightData(flights) {
    return flights.map(str => {
        const parts = str.split(":");
        const route = parts[0];
        const price = parts[1];
 
        const cities = route.split("-");
        const from = cities[0];
        const to = cities[1];
 
        // console.log(from, to, price);
        // if(typeof price === "undefined" || isNaN(Number(price))) {
        //     return {
        //         err: "Invalid price for route " + route
        //     };
        // }
        return {
            from: from,
            to: to,
            price: Number(price)
        }
    })
}
 
const cleanFlights = cleanFlightData(rawFlights);
cleanFlights
    .filter(f => {
        if(typeof f.price === "undefined" || isNaN(Number(f.price))) {
            f.price = 0
        }
    });
const finalFlights = cleanFlights.filter(f => f.price >= 100 && f.price <= 500);
finalFlights.sort((f1, f2) => f1.price - f2.price);
console.log(finalFlights);