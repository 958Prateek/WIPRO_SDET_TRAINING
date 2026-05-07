const employees = [
     {id: 101, name: "Alice", salary: 6000},
     {id: 102, name: "Bob", salary: 3500},
     {id: 103, name: "Charlie", salary: 5200}
];
function taxLogic(salary) {
     if (salary > 5000) {
          return 0.20;
     } else {
          return 0.10;
     }
}

function calculatePayroll(employees, taxCallback) {
     if( !Array.isArray(employees)) {
          console.log("Invalid employee data");
          return;
     }
     let totalNetPayout = 0;

     let processedEmployees = employees.map(employee => {
          let taxRate = taxCallback(employee.salary);
          let tax = employee.salary * taxRate;
          let netSalary = employee.salary- tax;
          totalNetPayout += netSalary;

          let status;
          if (netSalary > 4000) {
               status ="Premium";
          } else {
               status ="Standard";
          }
          let updatedEmployee = {
               id: employee.id,
               name: employee.name,
               salary: employee.salary,
               netSalary: netSalary,
               status: status
          };
          return updatedEmployee;
     });
     console.log(
          `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
     );
     setTimeout(() => {
          console.log(processedEmployees);
     }, 2000) ;
}
calculatePayroll(employees, taxLogic);