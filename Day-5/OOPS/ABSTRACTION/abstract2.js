class WashingMachine {

    #washClothes() {
        return "Washing clothes...";
    }

    #dryClothes() {
        return "Drying clothes...";
    }

    start() {
        const wash = this.#washClothes();
        const dry = this.#dryClothes();

        console.log(`${wash} ${dry}`);
    }
}

const machine1 = new WashingMachine();

machine1.start();