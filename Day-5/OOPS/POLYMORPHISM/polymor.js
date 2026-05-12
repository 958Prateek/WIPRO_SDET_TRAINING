class Payment {

    pay(amount) {
        console.log(`Paying ${amount}`);
    }
}
class CreditCard extends Payment {

    pay(amount) {
        console.log(
            `Paid ${amount} using Credit Card`
        );
    }
}
class UPI extends Payment {

    pay(amount) {
        console.log(
            `Paid ${amount} using UPI`
        );
    }
}
class Cash extends Payment {

    pay(amount) {
        console.log(
            `Paid ${amount} using Cash`
        );
    }
}

// Creating objects
const payments = [
    new CreditCard(),
    new UPI(),
    new Cash()
];

// Polymorphism
payments.forEach(payment => payment.pay(500));