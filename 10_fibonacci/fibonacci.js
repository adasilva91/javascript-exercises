const fibonacci = function(x) {
    // 1, 1, 2, 3, 5, 8, 13, 21
    // check argument for positive number
    if (x < 0) {
        return 'OOPS';
    }
    // convert arg to number if its in string format
    if (!Number.isInteger(x)) {
        x = parseInt(x);
    }
    // start base of sequence as array
    let f = [0, 1];
    // loop through sequence until xth iteration
    for (let i = 1; i < x; i++){
        // --- FIBONACCI CODE --- 
        // Next number = Current number + Previous before 
        f.push(f[i] + f[i - 1]);
    }
    return f[x];
};

// Do not edit below this line
module.exports = fibonacci;
