class User {
    constructor(name) {
        this.name = name;
    }

    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}

class Admin extends User {
    constructor(name, role) {
        // Call parent class constructor
        super(name);
        this.role = role;
    }

    // Method Overriding
    logIn() {
        // Call parent class method
        super.logIn();

        console.log(
            `${this.name} has admin privileges as a ${this.role}.`
        );
    }
}

// Creating objects
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");

// Calling methods
user1.logIn();
// Output: Alice has logged in.

admin1.logIn();
// Output:
// Bob has logged in.
// Bob has admin privileges as a Super Admin.