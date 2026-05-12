class BankAccount {

     #balance = 0;

     deposit(amount) {

          if (amount > 0) {
               this.#balance += amount;

               console.log(`Deposited: ${amount}`);
          }
     }

     withdraw(amount) {

          if (amount <= this.#balance) {

               this.#balance -= amount;

               console.log(`Withdrawn: ${amount}`);

          } else {

               console.log("Insufficient balance");
          }
     }

     getBalance() {

          console.log(`Balance: ${this.#balance}`);
     }
}

const account1 = new BankAccount();

account1.deposit(5000);

account1.withdraw(2000);

account1.getBalance();