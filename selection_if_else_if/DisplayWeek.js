//read the number from command line
const num = parseInt(process.argv[2]);

const weekdays = {
    "1": "Sunday",
    "2": "Monday",
    "3": "Tuesday",
    "4": "Wednesday",
    "5": "Thursday",
    "6": "Friday",
    "7": "Saturday"
};

if (num >= 1 && num <= 7) {
    console.log(weekdays[num.toString()]);
} else {
    console.log("Invalid input");
}