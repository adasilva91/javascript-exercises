const leapYears = function(year) {
    // if year is divisible by 4 or 400 return true
    if (year % 4 === 0) {
        if ( year % 100 === 0 && year % 400 !== 0){
            return false;
        }
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
