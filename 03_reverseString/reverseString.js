const reverseString = function (string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.unshift(string.charAt(i));
    }
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
