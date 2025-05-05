'use strict';
// Strings MEthods

// Task #1:
// let name = 'Mary ';
// let activity = 'drink tea';
// let bio = 'Our guest ' + name + activity + '.';
// console.log(bio.length);

// Task #2:
// Creating Script that asks the user to enter a number and print it as string
// const str =
//   'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// let ans = prompt(str);
// console.log(`char #${ans} is: "${str[ans]}"`);

// Task #3:
// Creating script that asks the user to enter a string ans prints the last and the pre last char of this string
// let str = prompt('Enter a string');
// console.log(
//   `The pre-last char: ${str[str.length - 2]}\nThe last char: ${
//     str[str.length - 1]
//   }`,
// );

// Task #4:
// printing the string from last to beginning
// let ans = 'abcde';
// let str = '';
// for (let i = ans.length - 1; i >= 0; i--) str += ans[i];
// console.log(str);

// Task #5:
// converting js to JS
// console.log('js'.toUpperCase());

// Task #6:
// Asks the user to enter a string and checks if it exsist as substring in the
// given string
// let ans = prompt('Enter a substring:');
// const str =
//   'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// if (str.includes(ans)) console.log('Exists');
// else console.log('NOT Exists!');

// Task #7:
// Convert the dash in  1-2-3-4-5 string to points
// const str = '1-2-3-4-5';
// console.log(str.replaceAll('-', '.'));

// Task #8:
// Convert the dash in  1-2-3-4-5 string to points
//const str = '1-2-3-4-5';
//console.log(str.replaceAll('-', '.'));

//Task #9
//we need to guess the out-put
//Expexted out-put is : fw
//const str = 'sdfwe'
//console.log(str.substring(4,2));

//Task #10
//split the sentence "I'm Learning javascript ! " to learning in  3 ways

const str = 'im learning javascript!';
//1\\
console.log(str.slice(3, 11));

//2\\
console.log(str.substring(3, 11));

//3\\
console.log(str.substr(3, 9));

// Task #11:
// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';
// console.log(str.startsWith('http://'));

// Task #12:s
// const str = 'https://www.notion.html';
// console.log(str.endsWith('.html'));

// Task #13:
// const str = 'ab cd cd cd ef';
// console.log(str.lastIndexOf('cd')); // 9
// console.log(str.lastIndexOf('cd', 8)); //6

// Task #14:
// const str = 'abcde';
// console.log(str.startsWith('abc')); // tue
// console.log(str.startsWith('xxx')); // false
// console.log(str.startsWith('bc', 1)); // true

// Task #15:
// const str = 'abcde';
// console.log(str.endsWith('cde')); // tue
// console.log(str.endsWith('xxx')); // false
// console.log(str.endsWith('bc', 3)); // true

// Task #16:

// let str = 'ab-cd-ef';
// console.log(str.split('-')); // ['ab', 'cd', 'ef]
// console.log(str.split('-', 2)); //['ab', 'cd']
// console.log(str.split('')); //['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
// console.log(str.split('', 3)); //['a', 'b', '-']

// let str2 = '12345';
// console.log(str2.split('')); //['1', '2', '3', '4', '5']
