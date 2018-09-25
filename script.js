//Hello, you! and Hello, you! Part 2
function hello(name) {
    if (!name) {
        console.log("Hello, world!")
    } else {
    console.log(`Hello, ${name}!`);
    }
}

//Madlib
function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}`;
}

//Tip Calculator
function tipAmount(bill, service) {
    if (service === "good") {
        return bill * .20;
    } else if (service === "fair") {
        return bill * .15;
    } else if (service === "bad") {
        return bill * .10;
    }
}

//Tip Calculator 2
function totalAmount(bill, service) {
    if (service === "good") {
        return bill * 1.20;
    } else if (service === "fair") {
        return bill * 1.15;
    } else if (service === "bad") {
        return bill * 1.10;
    }
}

//Tip Calculator 3
function splitAmount(bill, service, people) {
    if (service === "good") {
        return (bill * 1.20)/people;
    } else if (service === "fair") {
        return (bill * 1.15)/people;
    } else if (service === "bad") {
        return (bill * 1.10)/people;
    }
}


//Print Numbers for loop
function printNumbers(start, end) {
    if (start > end) {
        for (var i = start; i >= end; i--) {
            console.log(i);
        }
    } else if (start < end) {
        for (var i = start; i <= end; i++) {
            console.log(i);
        }
    } else {
        console.log("Numbers must be different!");
    }
}

//Print Numbers while loop
function printNumbersWhile(start, end) {
    var i = start;
    if (start > end) {
        while (i >= end) {
            console.log(i);
            i--;
        }
    } else if (start < end) {
        while (i <= end) {
            console.log(i);
            i++;
        }
    } else {
        console.log("Numbers must be different!");
    }
}


