// function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// function to find the palindrome of a number
function getPalindrome(num) {
    let reversedNum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        reversedNum = (reversedNum * 10) + digit;
        temp = Math.floor(temp / 10);
    }

    return reversedNum;
}

// read number
let num = Number(process.argv[2]);

// check if number is prime
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
    // get palindrome
    let palindrome = getPalindrome(num);
    console.log(`the palindrome of ${num} is ${palindrome}`);
    
    // check if the palindrome is also prime
    if (isPrime(palindrome)) {
        console.log(`the palindrome ${palindrome} is also a prime number`);
    } else {
        console.log(`the palindrome ${palindrome} is not a prime number`);
    }
} else {
    console.log(`${num} is not a prime number`);
}
