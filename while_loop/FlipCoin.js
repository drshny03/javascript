let headsCount = 0;
let tailsCount = 0;

//clip coin
while (headsCount < 11 && tailsCount < 11) {
    //generate a random number
    let flip = Math.random(); 

    if (flip < 0.5) {
        headsCount++;
    } else {
        tailsCount++;
    }
}

//print the winner
if (headsCount === 11) {
    console.log("Heads wins 11 times");
} else {
    console.log("Tails wins 11 times");
}
