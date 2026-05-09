//  A function can remember its variable from variables from parent function even after the parent function is finished.
// Closure = Function + Memory of outer variables.

function outer() {
    let name = "Prateek";
    function inner() {
        console.log(name); //Even after outer() is completed, inner() still remembers name.
    }
    return inner;
}

const myFunc = outer(); 
myFunc();