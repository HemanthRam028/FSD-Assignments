//Q1. Explain the .map() function in JavaScript and provide three examples with detailed explanations.
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.


const numbers = [1,2,3,4,6]
const addes = numbers.map(function(num){
    return (num + num)   
})


console.log(addes)
/*Array numbers: This is an array of numbers: [1, 2, 3, 4, 6].
map() Method: The map() method is used to iterate over each element (num) in the numbers array.
Callback Function: For each element, the callback function doubles the value (num + num) and returns it.
Resulting Array addes: The resulting array addes is [2, 4, 6, 8, 12], where each element is the original element doubled.*/

const names = ["hemanth", "ram","kalidindi"]
const letter = names.map(function(a){
    return a.toUpperCase()

})
console.log(letter)
/*Array names: This is an array of strings: ["hemanth", "ram", "kalidindi"].
map() Method: The map() method iterates over each element (a) in the names array.
Callback Function: The callback function converts each string to uppercase using a.toUpperCase() and returns the uppercase string.
Resulting Array letter: The resulting array letter is ['HEMANTH', 'RAM', 'KALIDINDI'], where each name has been converted to uppercase.*/

const name1 = [
    { names1: "ram", Age: 22 },
    { names1: "ravi", Age: 23 },
    { names1: "venu", Age: 21 }
];

const special = name1.map(function(l) {
    return l.names1; 
});

console.log(special);
/*Array name1: This is an array of objects, where each object represents a person with properties names1 (a name) and Age.
map() Method: The map() method iterates over each object (l) in the name1 array.
Callback Function: The callback function extracts the names1 property from each object (l.names1) and returns it.
Resulting Array special: The resulting array special is ['ram', 'ravi', 'venu'], which contains just the names from the original array of objects.*/
console.log("..............")


//Q2. Explain the .reduce() function in JavaScript and provide three examples with detailed explanations.
/*The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.*/

const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);
/*Array numbers1: This is an array of numbers: [1, 2, 3, 4, 5].
reduce() Method: The reduce() method iterates over each element in the numbers1 array, summing the elements.
Accumulator: The accumulator (accumulator) starts with the initial value 0.
Callback Function:
For each element (currentValue), it adds the currentValue to the accumulator.
The sum is accumulated in the accumulator.
Final Result sum: The final result is 15, which is the sum of all the numbers in the array.*/


const letter1 = ["ram", "ravi", "ravi", "ram", "ram", "venu"];
const letter2 = letter1.reduce(function(accumulator, currentValue) {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(letter2);
/*Array letter1: This is an array of strings: ["ram", "ravi", "ravi", "ram", "ram", "venu"].
reduce() Method: The reduce() method is used to count the occurrences of each string in the array.
Accumulator: The accumulator is initialized as an empty object {}. This object will hold the counts of each string.
Callback Function:
For each element (currentValue), the function checks if the string (currentValue) already exists as a key in the accumulator.
If it exists: The count (accumulator[currentValue]) is incremented by 1.
If it doesn't exist: The key is added to the accumulator with a value of 1.
Final Result letter2: The final result is an object { ram: 3, ravi: 2, venu: 1 }, where the keys are the strings and the values are their counts in the original array.*/


const lists = [[1,2,3],[4,5],[6]]
const lists1 = lists.reduce(function(accumulator, currentValue){
    return accumulator.concat(currentValue)
},[])

console.log(lists1)
/*Array lists: This is a nested array: [[1, 2, 3], [4, 5], [6]].
reduce() Method: The reduce() method is used to flatten the nested array into a single array.
Accumulator: The accumulator is initialized as an empty array []. This will accumulate the flattened elements.
Callback Function:
For each sub-array (currentValue), the function uses accumulator.concat(currentValue) to concatenate the sub-array to the accumulator.
The concat() method is used because it combines two arrays into one.
Final Result lists1: The final result is a single flattened array [1, 2, 3, 4, 5, 6] that combines all the elements of the nested arrays.*/

console.log("............")

//Q3. Explain the .filter() function in JavaScript and provide three examples with detailed explanations.
/*The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.*/

const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers11.filter(function(num) {
    return num % 3 === 0;
});

console.log(evenNumbers); 




/*The filter() method iterates over each element in the numbers array.
For each element (num), it checks whether the number is even (num % 2 === 0).
If the condition is true, the number is included in the new array evenNumbers.
The final result is an array of even numbers.*/

const words = ['ram', 'ravi', 'venu', 'hemanth'];

const Words = words.filter(function(word) {
    return word.length > 3;
});

console.log(Words); 

/*words Array:
This is an array of strings: ['ram', 'ravi', 'venu', 'hemanth'].
filter() Method:
The filter() method iterates over each element in the words array.
For each element (referred to as word inside the callback function), it checks if the length of the word (word.length) is greater than 3.
If the condition is true, the word is included in the new array Words.
New Array Words:
This array will include all the words from the original array words that have more than 3 characters.*/

const people = [
    { name: 'ravi', age: 25 },
    { name: 'ram', age: 20 },
    { name: 'rajesh', age: 22 },
    { name: 'gill', age: 19 }
];

const adults = people.filter(function(person) {
    return person.age > 21;
});

console.log(adults); 

/*The filter() method iterates over each object in the people array.
For each object (person), it checks whether the age property is greater than 21.
If the condition is true, the object is included in the new array adults.
The final result is an array of people who are over 21 years old.*/