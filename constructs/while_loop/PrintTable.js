//read number
let number = Number(process.argv[2]);

//function to print power of two
function printPowersOfTwo(number) {
    if (number < 0) {
        console.log("enter positive integer");
        return;
    }


    let i = 0;
    let power = 1;
    //print table 
    while (i <= number && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}

printPowersOfTwo(number);
