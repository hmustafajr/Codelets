//returns the number of times a character is found in an array

const frequency = arr =>
arr.reduce((a, v) =>
{
           a[v] = a[v] ? a[v] + 1 : 1;
           return a;
},
{});
