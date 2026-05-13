// 3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.


type TaskStatus = "Open" | "InProgress" | "Closed";
function handleTask(status: TaskStatus): void {
     switch (status) {

          case "Open":
          console.log("Task is Open");
          break;

          case "InProgress":
          console.log("Task is In Progress");
          break;

          case "Closed":
          console.log("Task is Closed");
          break;

          default:
          const exhaustiveCheck: never = status;

          console.log(exhaustiveCheck);
     }
}

handleTask("Open");
handleTask("InProgress");
handleTask("Closed");