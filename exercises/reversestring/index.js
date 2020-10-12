// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Test command
// jest foldername/test.js --watch

// Debugger
    /*
        node inspect index.js
        c (or cont, continue)
        repl
    */

// 1. array.reverse()
    // function reverse(str) {   
    //     // Call split and pass in an empty string, it turns it in to an array with character
    //     const arr = str.split('');
    //     arr.reverse();

    //     // This will join all those elements back into a string
    //     return arr.join('');
    // };

// 2. forOf
    // function reverse(str) {   
    //     let reversed = '';

    //     for (let character of str) {
    //         reversed = character + reversed;
    //         debugger;
    //     };

    //     return reversed;
        
    // };

// 3. reduce()
    // function reverse(str) {
    //     return str.split('').reduce((rev, char) => char + rev, '');
    // };

function reverse(str) {
    
};

reverse('asdf');

module.exports = reverse;