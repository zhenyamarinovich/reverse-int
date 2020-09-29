module.exports = function reverse(n) {
    let number = ("" + n).split("").reverse().join("");
    if (number[number.length - 1] === "-") {
        number = number.slice(0, number.length - 1);
    }
    return +number;

};
