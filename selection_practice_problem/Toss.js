//method to flip a coin
function flipCoin() {
    const result = Math.floor(Math.random() * 2);
    if (result === 0) {
        console.log("heads");
    } else {
        console.log("tails");
    }
}

flipCoin();