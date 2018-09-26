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

//Print a Square
function printSquare(size) {
    var string = "*";
    for (var i = 0; i < size; i++) {
        console.log(string.repeat(size));
    }
}

//Print a Box
function printBox(width, height) {
    var string = "*";
    var space = " ";
    if (width === 1 || height === 1) {
        console.log("Choose values greater than 1!");
    } else {
    console.log(string.repeat(width));
    for (var i = 0; i < height - 2 ; i++) {
        console.log(`${string}${space.repeat(width - 2)}${string}`)
    }
    console.log(string.repeat(width));
    }
}

//Print a Banner
function printBanner(text) {
    var string = "*";
    var chars = text.length;
    console.log(string.repeat(chars + 2));
    console.log(`${string}${text}${string}`);
    console.log(string.repeat(chars + 2));
}

//Factor a number
function factors(num) {
    var factorsArray = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorsArray.push(i);
        }
    }
    console.log(factorsArray);
}

//caesar ciphers
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesarCipher (array, offset) {
    var cipher = {};
    for (var i = 0; i < array.length; i++) {
        var letter = array[i];
        if (i + offset >= 26) {
            cipher[((i + offset) - 26)] = letter;
        } else {
            cipher[i + offset] = letter;
        }
    }
    // for (var i=0; i < text.length; i++) {
    //     var textLetter = text[i];
    // }
    console.log(cipher);
}

caesarCipher(alphabet, 3);
caesarCipher(alphabet, 0);

// array[i] =

