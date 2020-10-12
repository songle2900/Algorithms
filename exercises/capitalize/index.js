// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] ===  ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

// function capitalize(str) {
//     // Empty array
//     const words = [];

//     // Iterate str with split method by space
//     for (let word of str.split(' ')) {
        
//         // Take first character of word: word[0]
//         // Make it as uppercase: .toUpperCase()
//         // Take all the character except the first letter: word.slice(1);
//         // Push it into empty array
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     // Convert the words array to string with space: join(' ')
//     return words.join(' ');
// }

module.exports = capitalize;
