function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("cool"))

module.exports = reverseString;