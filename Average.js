/*
This will return the average of an array after mapping the individual elements to a value.

Array.prototype.map() maps each element to the value returned by fn.

Array.prototype.reduce() adds each value to an accumulator starting with the value of 0 then divide by the length of the array.
*/


const averageBy = (arr, fn) =>
{  // originally written without curly braces remove later
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;
} // originally written without curly braces remove later
