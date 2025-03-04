//input choice
console.log("1. feet to inch \n2. inch to feet\n3.feet to meter\nmeter to feet")
let choice = Number(process.argv[2]); 
//input value
let value = Number(process.argv[3]); 

switch (choice) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${value * 0.3048} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${value / 12} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${value * 3.28084} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter 1, 2, 3, or 4.");
}
