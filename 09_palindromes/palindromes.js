const palindromes = function (string) {
    // make new variable for new string to be stored in
    let newString = '';
    // store string in new variable without spaces or punctuation
    for (let j = 0; j < string.length; j++) {
        if (string[j] >= 'a' && string[j] <= 'z' || string[j] >= 'A' && string[j] <= 'Z') {
            newString += string[j].toLowerCase();
        }
        else {
            continue;
        }
    }


    
    // loop through string
    for (let i = 0; i < newString.length; i++){
        // make x same position on other end of string going down
        let x = (newString.length -i) -1;
        // if letter at ith position is the same as letter at xth position - continue
        if (newString[i] === newString[x]){
            continue;
        }
        // else if the letters dont match, tell computer it isnt a palindrome
        else {
            return false;
        }
    }
return true;
};

// Do not edit below this line
module.exports = palindromes;
