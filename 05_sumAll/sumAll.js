const sumAll = function (num1, num2) {
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// ***make a variable holding the sum number
// ***have an if statement that checks to make sure the params are not negative nums
// ***have an if statement that checks to make sure the params are only integers and not strings, arrays or any other data type
// find the lesser of two params then loop through it with a for loop, adding the iterator to the sum each iteration

// Do not edit below this line
module.exports = sumAll;
