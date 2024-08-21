// function range(start, end){
//     let result = [];
//     for (let i = start; i <= end; i++){
//         result.push(i)
//     }
//     return result
// }

// console.log(range(1, 10));

// function sum(numbers){
//     sum = 0
//     for (let i = 0; i<=numbers.length; i++){
//         sum+=i

//     }return sum
// }

// console.log(sum([1,2,3,4,5,6,7,8,9,10]))


// function range(start, end, step=1){
//     let result = []
//     let sum = 0
//     if (step > 0){
//         for (let i = start; i<=end; i+=step){
//             sum+=i
//             result.push(i)
//         }
//     }else{
//         for (let i = start; i>=end; i+=step){
//             sum+=i
//             result.push(i)  
//         }
        
//     }
//     return {result, sum}
    
// }
    

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]


console.log("................")

// function reverseArray(myArray){
//     let result = [];
//     for (let i = myArray.length-1;i>=0; i--){
//         result.push(myArray[i])
//     }
//     return result
// }

// let myArray = ["A","B","C"]
// console.log(reverseArray(myArray));
// console.log(myArray);




// function reverseArrayInPlace(arrayValue){
//     let results = []
//     for (let i = arrayValue.length-1; i>=0; i--){
//         results.push(arrayValue[i])
//     }
//     for (let i = 0; i < results.length; i++) {
//         arrayValue[i] = results[i];
//     }
// }
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

console.log("...................")

function arrayToList(array){
    let list = null
    for(let i=array.length-1 ;i>=0 ;i--){
        list = {value :array[i],rest:list}
    }
    return list;
}
console.log(arrayToList([10, 20]));

console.log(arrayToList(([1,2,3])))
function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


function prepend(value, rest) {
    return { value, rest };
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20