let arrayA = [1,2,3];
let arrayB = [5,6,7];
// should be [6, 8, 10]

// let arrayC = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// 1,2,3,4,5,6,7,8,9,10
let results = [];
let temp = [];
for (let i = 0 ; i < 10 ; i++) {
    if (i === 0) {
        temp.push(i + 1);
        continue;
    }
    
    if (i % 3 === 0) {
        results.push(temp);
        temp = [];
    }
    temp.push(i + 1);
}
console.log(results);











[
    [6,7,8],
    [7,8,9],
    [8,9,10]
]

let arrayResult = [];
if (arrayA.length === arrayB.length) {
    arrayResult = arrayA.map((item, i) => item + arrayB[i]);

    arrayA.forEach((item, i) => {
        arrayResult.push(item + arrayB[i]);
    });

    console.log(arrayResult);
}

// for (let i = 0 ; i < arrayA.length; i++) {
//     arrayResult.push(arrayA[i] + arrayB[i]);
// }

console.log(arrayResult);