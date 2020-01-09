/*
Converts an int to a suffixed string
adding AM or PM based on the value
Uses the modulo operator (%) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix
*/

const getMeridiemIntSuff = num =>
  num === 0 || num === 24
    ? 12 + 'AM'
    : num === 12
      ? 12 + 'PM'
      : num < 12
        ? (num % 12) + 'AM'
        : (num % 12) + 'PM';
