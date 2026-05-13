//  The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).

type AllEvents =  "click" | "dbclick" | "submit"| "reset"| "keypress";

type MouseEvents = Extract<
  AllEvents,
  "click" | "dbclick"
>;

type NonFormEvents = Exclude<
  AllEvents,
  "submit" | "reset"
>;

const mouseEvent1: MouseEvents = "click";

const mouseEvent2: MouseEvents = "dbclick";

const nonFormEvent1: NonFormEvents = "click";

const nonFormEvent2: NonFormEvents = "keypress";

console.log(mouseEvent1);
console.log(mouseEvent2);

console.log(nonFormEvent1);
console.log(nonFormEvent2);