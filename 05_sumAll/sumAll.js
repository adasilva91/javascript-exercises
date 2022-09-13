const sumAll = function(a, b) {
    // check if arguments are integers 
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    } 
    // check for invalid numbers
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    // make a start, end and sum variable
    let startNum;
    let endNum;
    let sum = 0;
    // set the smaller number to be the start variable 
    if (b < a) {
        startNum = b;
        endNum = a; 
    }
    else {
        startNum = a;
        endNum = b;
    }

    // loop through all numbers from start to end
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
