//variables
let money = 100; 
const goal = 200; 
let bets = 0;   
let wins = 0;   

while (money > 0 && money < goal) {
    bets++;

    if (Math.random() < 0.5) {
        money--; // Lose 1
    } else {
        money++; // Win 1
        wins++; 
    }
}

//print results
console.log(`Total bets made ${bets}`);
console.log(`Total wins ${wins}`);
if (money === 200) {
    console.log("Gambler reached the goal of 200");
} else {
    console.log("Gambler went broke");
}
