// -------------------- Arrays ----------------

let arr = [1,2,3,4,5]
// console.log(arr);

// console.log(arr.push(10));

// console.log(arr.pop())
// console.log(arr);

let newArr = [10,20,30,40,50];

//adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(newArr.unshift(12)); 
// console.log(newArr);

// console.log(newArr.shift());

// console.log ("A " + newArr.slice(2));

/* Splice -> 
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/
// console.log(newArr.splice(2,0,34));
// console.log(newArr);

const heros = ["sallu", "hritik", "akshay", "ajay"];

const heroine = ["katrina", "kajaol", "madhuri", "sara"];

const myFav = heros.concat(heroine);
// console.log(myFav);

const fav = [...heros,...heroine]
// console.log(fav)

let arr1 = [1,2,3,4,[10,20,30,[100,200,300],1000,2000,300]]
// console.log(arr1.flat(Infinity))

// console.log(Array.isArray("hitish"));
// console.log(Array.isArray([1,2,3,4,5]));

console.log(Array.from("satish"));
/*
Array.from() is a static property of the JavaScript Array object.

You can only use it as Array.from().

Using x.from(), where x is an array will return undefined.


*/

