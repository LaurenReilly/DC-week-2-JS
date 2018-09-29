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
    return factorsArray;
}

//caesar ciphers
var text = "quid facis canis."

    function cipher(string, offset) {
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var message = "";
        for (var i = 0; i < string.length; i++) {
            var index = alphabet.indexOf(string[i]);
            if ((index + offset) >= 26) {
                message += alphabet[(index + offset) -26];
            } else if (index + offset < 26 && index + offset > 0) {
                message += alphabet[(index + offset)];
            } else {
                message += string[i];
            }
    }
    return message;
}

//leetspeak
function leetspeak(string) {
    var leet = {
        a: 4,
        e: 3,
        g: 6,
        i: 1,
        o: 0,
        s: 5,
        t: 7
    }
    var leetArray = Object.keys(leet);
    var leetSpeak = "";
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (leetArray.indexOf(letter) == -1) {
            leetSpeak += letter;
        } else if (leetArray.indexOf(letter)) {
            leetSpeak += leet[letter];
        }
    }
    return leetSpeak;
}

//Long long vowels
function longLongVowels(string) {
    var newText = "";
    for(var i = 0; i < string.length; i++){
        if (!(string[i] == string[i + 1])) {
            newText += string[i];
        }
        else if (string[i] == string[i + 1]){
            var letter = string[i];
            newText += letter.repeat(4);
        }
    }
    console.log(newText);
    return(newText);
}

//Sum the numbers
var numbers = [1, 2, 3, 4, 5];

function sumNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        sum += number;
    }
    return sum;
}


//Just the positives
var posNumbers = [-1, -2, -3, 1, 2, 3];

function positiveNumbers(array) {
    var positives = [];
    for (var i =0; i < array.length; i++) {
        var number = array[i];
        if (number > 0) {
            positives.push(number);
        }
    }
    return positives;
}

//tic tac toe
var array = [
    ["X", null, "X"],
    ["X", "O", null],
    ["X", "O", "O"]
]
//eight ways to win (3 rows, 3 columns, 2 diagonals)
//join them together to make string if OOO, or XXX then wins
function ticTacToe(board) {
    var winConditions = [
        board[0][0] + board[0][1] +board[0][2], //row1
        board[1][0] + board[1][1] +board[1][2], //row2
        board[2][0] + board[2][1] +board[2][2], //row3
        board[0][0] + board[1][0] +board[2][0], //col1
        board[0][1] + board[1][1] +board[2][1], //col2
        board[0][2] + board[1][2] +board[2][2], //col3
        board[0][0] + board[1][1] +board[2][2], //diag1
        board[2][0] + board[1][1] +board[0][2] //diag2
    ];
    for (var i = 0; i < winConditions.length; i++) {
        var winCondition = winConditions[i];
        if (winCondition == "XXX") {
            console.log("X");
            return "X";
        } else if (winCondition == "OOO") {
            console.log("O");
            return "O";
        }
    }
    //if we put in for loop it could exit out after first line w/o a win.
    //if we put outside for loop the only way we get here is if we went
    //all the way through the for loop and never hit a win condition
    return null;
}
 ticTacToe(array);