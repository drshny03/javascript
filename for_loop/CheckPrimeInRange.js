//read input
let start = Number(process.argv[2]); 
let end = Number(process.argv[3]);   

//function to check if a number is prime
function isPrime(n) {
    if (n < 2) 
        return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
             return false;
    }
    return true; 
}

// Validate input
if (start < 1 || end < 1 || start > end) {
    console.log("enter a valid positive range");
} else {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
