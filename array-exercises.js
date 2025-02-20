// array-exercises.js
let colors = ["red", "blue", "green"];
// Exercise 1: Create an array of three colors and print the first color.
console.log(colors[0]);
console.log(colors.indexOf("red"));

// Exercise 2: Add a color to the end of the array and print the array.
console.log(colors.push("yellow"));
console.log(colors);

// Exercise 3: Remove the last color from the array and print the array.
console.log(colors.pop());
console.log(colors);

// Exercise 4: Add a color to the beginning of the array and print the array.
console.log(colors.unshift("purple"));
console.log(colors);

// Exercise 5: Remove the first color from the array and print the array.
console.log(colors.shift());
console.log(colors);

// Exercise 6: Print the number of colors in the array.
console.log(colors.length);


// Exercise 7: Convert the array into a string separated by dashes.
console.log(colors.join("-"));

// Exercise 8: Replace the second color with "pink" and print the array.
console.log(colors[1] = "pink");
console.log(colors);

// Exercise 9: Create an array of numbers and print the third number.
console.log([1, 2, 3, 4, 5][2]);

// Exercise 10: Remove the last element, add two numbers to the beginning, and print the array.
console.log([1, 2, 3, 4, 5].pop());
console.log([1, 2, 3, 4, 5].unshift(0, 0));
console.log([1, 2, 3, 4, 5]);
