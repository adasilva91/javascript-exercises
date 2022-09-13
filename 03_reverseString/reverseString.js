const reverseString = function(string) {
    // loop through string
    let lastLetter;
    let reversedOutput = '';
    for (let place = (string.length - 1); place >= 0; place--) {
        lastLetter = string[place];
        reversedOutput += lastLetter;
    }
    return reversedOutput;
    // take first character out and put it in beginning of new string
};

// Do not edit below this line
module.exports = reverseString;
