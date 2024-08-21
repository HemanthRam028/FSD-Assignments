function reduce(arrays){
    return arrays.flat()
}
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(arrays));

console.log(".............")

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log("...............")


function every(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10)); // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10)); // → true

