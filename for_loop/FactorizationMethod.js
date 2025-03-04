//read number
let number = Number(process.argv[2]);

// Function to compute prime factors
function primeFactors(n) {
    if (n <= 1) {
        console.log("number should be greater than 1");
        return;
    }

    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

    if (n > 2) {
        console.log(n);
    }
}

if (number < 2) {
    console.log("number should be greater than 1");
} else {
    primeFactors(number);
}
