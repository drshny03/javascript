const args = process.argv.slice(2);
const currentYear = parseInt(args[0]);

//method to check leap year
function isLeapYear(currentYear) {
    if (currentYear >= 1000 && currentYear <= 9999) {
        
        if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
            return "Year is a Leap Year";
        } else {
            return "Year is not a Leap Year";
        }
    } else {
        return " Please enter a valid 4-digit year!";
    }
}

if (isNaN(currentYear)) {
    console.log( "Invalid input");
} else {
    console.log(isLeapYear(currentYear));
}