//read input
let number = Number(process.argv[2]);

//function to check prime
function isPrime(n) {
    if (n < 2) 
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) 
            return false;
    }
    return true; 
}


if (number < 1) {
    console.log("enter positive integer");
} else {
    console.log(number, isPrime(number) ? "is a prime number" : "is not a prime number");
}
