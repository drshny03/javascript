//method to generate random digit
function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;
}

//array to store number
let numbers = [];
for(let i=0; i<5; i++){
    numbers.push(getRandomThreeDigit());
}
//find min and max
let min = numbers[0];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
//print result
console.log("min - ",min , "\nmax - ",max);