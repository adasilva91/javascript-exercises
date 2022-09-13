const removeFromArray = function(array, ...otherArgs) {
    // let newArray = [];
    // let newItem;
    let see;
    // loop through array
    // for (let i = 0; i < array.length; i++) { 
    //     // for each item in array, if it does not match other arguments then add it to new array
    //     if (array[i] !== a && array[i] !== b && array[i] !== c && array[i] !== d) {
    //         newArray.push(array[i]);
    //     }

    
    
    
    // make a copy of  original array
    let copyArray = Array.from(array);
    // loop through elements in original array
    for (let i = 0; i < array.length; i++){
        // for each element in array, loop through arguments and see if it matches any of the arguments
        for (let x of otherArgs) {
            see = x;
            // if current element matches an argument, get index of same element in copy array
            if (array[i] === x) {
                let myIndex = copyArray.indexOf(x)
                // splice away element in copy array by using index returned
                copyArray.splice(myIndex, 1); 
            }  
        }
    }
return copyArray;
}



// Do not edit below this line
module.exports = removeFromArray;
