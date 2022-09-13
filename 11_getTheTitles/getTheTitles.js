const getTheTitles = function(books) {
    // make a new array to store just book titles in
    let titles = [];
    // loop through dictionary to get all book titles
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
