// Memory Allocation Diagram Example

const person ={
     name: "Prateek"
};
const person2 = person;

// Stack
// -----
// person  → 500
// person2 → 500

// Heap
// -----
// 500 → {
//    name: "Prateek"
// }

// Stack memory stores primitive values directly, while heap memory stores objects and arrays using references.