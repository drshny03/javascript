//read input
let numberA = Number(process.argv[2]);
let numberB = Number(process.argv[3]);
let numberC = Number(process.argv[4]);

//arithmetic operations
let result1 = numberA + numberB * numberC;
let result2 = numberA % numberB + numberC;
let result3 = numberC + numberA / numberB;
let result4 = numberA * numberB + numberC;

//store result
let results = [result1, result2, result3, result4];

//find maximum and minimum value
let maxResult = Math.max(...results);
let minResult = Math.min(...results);

console.log(`Maximum Value- ${maxResult}`);
console.log(`Minimum Value- ${minResult}`);
