//Wrapping data and methods together into one unit and hiding data from direct access.....mainly used for data Protection

class BankAccount {
    #balance = 0; // private variable | Access modifier
 
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
 
    getBalance() {
        return this.#balance;
    }
}
 
const PrateekAccount = new BankAccount();
PrateekAccount.deposit(1000);
PrateekAccount.withdraw(200);
// PrateekAccount.balance = 10000;
console.log(`Final Balance: ₹${PrateekAccount.getBalance()}`);
 
const PriyaAccount = new BankAccount();
PriyaAccount.deposit(500);
PriyaAccount.withdraw(1000);
console.log(`Final Balance: ₹${PriyaAccount.getBalance()}`)