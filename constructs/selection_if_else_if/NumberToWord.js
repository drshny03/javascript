const numbers = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine" 
};

let number = Number(process.argv[2]);

if(number.toString() === "0") {
   console.log("zero");
}
else if(number.toString() in numbers){
    console.log(numbers[number.toString()]);
}
