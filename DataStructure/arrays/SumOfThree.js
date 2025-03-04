//function to find 3 number
function findTriplets(arr) {
    let n = arr.length;
    let triplets = [];
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
}

let arr = [0, -1, 2, -3, 1, -2, 3];
let result = findTriplets(arr);

if (result.length === 0) {
    console.log("o triplets found");
} else {
    console.log(result);
}
