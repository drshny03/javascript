//function to generate random number
function generateRandom(){
    return Math.floor(Math.random()*90 +10 );
}

let sum = 0;
let average = 0;

for(let i=0; i<5; i++){
    let randomNumber = generateRandom();
    //calculate sum of random number
    sum += randomNumber;
}

//calculate average
average = sum/5;

//print result
console.log("sum - ", sum, "\naverage - ", average);
