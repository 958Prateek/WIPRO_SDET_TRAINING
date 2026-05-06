// Hiding internal complexity and showing only essential features.
// example-- You drive a car without knowing engine internals.

class CoffeeMachine {

    // Private field
    #waterTemperature = 90;

    // Private method
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }

    // Private method
    #grindBeans() {
        return "Grinding beans.";
    }

    // Public method
    brew() {

        // Internal implementation hidden from user
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();

        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}

// Creating object
const myCoffeeMachine = new CoffeeMachine();

// User only accesses brew()
console.log(myCoffeeMachine.brew());

