//read input
let n = Number(process.argv[2]);

if (n <= 0 || isNaN(n)) {
    console.log("enter positive integer");
} else {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`Harmonic Number H(${n}) = ${harmonic}`);
}
