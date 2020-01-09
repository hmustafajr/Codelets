/*
Converts an integer to a suffixed string, adding am or pm based on its value.

Use the modulo operator (%) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.
*/

const getMeridiemIntSuff = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';
