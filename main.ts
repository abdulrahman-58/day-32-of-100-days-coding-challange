// Assalamualaikum @everyone 👋

// 🚀 Day 32 Challenge: Start Coding! 🚀

// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let words: string[] = ["Harry", "Coding", "JavaScript", "Python"];
let lengths: number[] = words.map(word => word.length);
console.log(lengths);
console.log(`\n`);

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterNum(numbers: number[]): number[]{
    return numbers.filter(number => number > 10);
}
let numbers: number[]= [7,4,18,87,94,69];
console.log(filterNum(numbers));
console.log(`\n`);

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum (numbers: number[]): number{
    return numbers.reduce((accumulator, current) => accumulator+ current, 0);
}
const numbers: number[] = [5,8,9,6,1];
console.log(calculateSum(numbers));
