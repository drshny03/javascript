//read input
let magicNumber = Number(process.argv[2]);

if (magicNumber < 1 || magicNumber > 100) {
    console.log("enter a number between 1 and 100");
    process.exit(1);
}

let low = 1, high = 100;

//find magic number
while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (magicNumber > mid) {
        low = mid + 1;
    } else {
        high = mid; 
    }
}

console.log(`magic number is ${low}`);
