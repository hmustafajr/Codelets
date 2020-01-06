//returns the number of times a character is found in an array

const frequency = arr =>
arr.reduce((a, v) =>
{
           a[v] = a[v] ? a[v] + 1 : 1; //?s are used as conditional operators that assign a value to a variable based on a condition
           return a;
},
{});
