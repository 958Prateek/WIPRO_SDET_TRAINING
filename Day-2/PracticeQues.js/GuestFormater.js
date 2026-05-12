function formatGuests(names) {
  names.shift();

  
  let guests = names.map(name => `Guest: ${name}`);

  
  return guests.join("\n");
}

let result = formatGuests(["Prattek", "Amit", "Rahul", "Neha"]);
console.log(result);