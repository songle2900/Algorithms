// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solved myself #1
    // function reverseInt(n) {
    //     const numArr = n.toString().split('').reduce((rev, char, i, com) => {
    //         while(true) {
    //             let search = com.indexOf("0");

    //             if (search !== -1) {
    //                 com.splice(search, 1);
    //             } else {
    //                 break;
    //             }
    //         }

    //         return char + rev;
    //     }, '');
        
    //     return parseInt(numArr) * Math.sign(n);
    // };

// Solved myself #2 2020
function reverseInt(n) {
    const reversed = n.toString().split('').reduce((prev, cur) => {
        return cur + prev;
    });

    return parseInt(reversed) * Math.sign(n);
};

// Solution
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');

//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }

//     return parseInt(reversed) * Math.sign(n);
// };

module.exports = reverseInt;