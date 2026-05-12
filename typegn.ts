// Typeguard -- A Type Guard is a technique used in TypeScript to check and narrow the type of a variable at runtime.
// “Inside this block, the variable is definitely this type.”

// Typeguard

function format(input: string | number) {
    if(typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}

console.log(format("Prateek"));
console.log(format(12.456));


interface Bird { 
    fly: () => void, 
    species: string 
}

interface Fish { 
    swim: () => void 
}

function move(animal: Bird | Fish) {
    if("fly" in animal) {
        animal.fly();
    } else {
        animal.swim();
    }
}

const bird: Bird = {
    fly: () => console.log("Bird is flying"),
    species: "Eagle"
}

const fish: Fish = {
    swim: () => console.log("Fish is swimming")
}

move(bird);
move(fish);


function isValidBird(bird: Bird): bird is Bird {
    return bird && typeof bird.species === "string";
}

const b1 = {
    fly: () => console.log("Flying"),
    species: "aerial"
}

if(isValidBird(b1)) {
    console.log(b1.species);
}