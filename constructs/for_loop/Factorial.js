//read number
let number = Number(process.argv[2]);

//function to compute factorial
function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

if (number < 0) {
    console.log("enter positive integer");
} else {
    console.log(`${factorial(number)}`);
}
