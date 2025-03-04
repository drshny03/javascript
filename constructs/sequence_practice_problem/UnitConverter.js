//convert inch to feet
function inchesToFeet(inches) {
    return inches / 12;
}
//feet to meter
function feetToMeters(feet) {
    return feet * 0.3048; 
}
//square meter to acres
function squareMetersToAcres(squareMeters) {
    return squareMeters * 0.000247105;
}

let feet = inchesToFeet(42);
console.log("42 inches = " + feet + " feet");

let lengthMeters = feetToMeters(60);
let widthMeters = feetToMeters(40);
let areaMeters = lengthMeters * widthMeters;

console.log("Length- " + lengthMeters+ " meters");
console.log("Width- " + widthMeters + " meters");
console.log("Area- " + areaMeters + " square meters");

let totalAreaMeters = areaMeters * 25;
let totalAreaAcres = squareMetersToAcres(totalAreaMeters);

console.log("Total area of 25 plots -");
console.log("Area in square meters- " + totalAreaMeters+ " m²");
console.log("Area in acres- " + totalAreaAcres+ " acres");