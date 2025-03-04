// function to check if a number is a palindrome
function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    //reverse the number
    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }

    //check if the original number is equal to the reversed number
    return originalNum === reversedNum;
}

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

//print result 
console.log(`${num1} palindrome? ${isPalindrome(num1)}`);
