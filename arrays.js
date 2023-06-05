/* 
    ? Arrays
    * list-like object
    * reference data type
    * prototype has methods to perform traversal and mutation
    operations
        * denoted by [ ]
        * hold multiple data types
        * content can be accessed by their index
*/

// creating new array literal
let arr = [];

console.log(arr); // creates empty array literal
console.log(Boolean(arr)); // ! empty array returns true
console.log(Boolean("")); // empty string returns false

// ? How would you check if an array is empty

// !wrong
!arr ? console.log("Empty") : console.log("Has contents");

// ?right
arr.length == 0 ? console.log("Empty") : console.log("has stuff");

// creating an array using array constructor
let newArr = new Array("cheese", "prosciutto", "crackers");
console.log(newArr);

//lets create some arrays

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"];
console.log(carMake); // displays all contents of an array
console.log(carMake[1]); // displays value at an index
console.log(carMake[7]) // returns undefined

// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari";
console.log(carMake);

// Dynamic reassignment
carMake[carMake.length - 1] = "Audi";
console.log(carMake);

// Dynamic append
carMake[carMake.length] = "Bugatti";
console.log(carMake);

// Reassigning values
carMake[0] = "Alpina";
console.log(carMake);

// Assigning values to a different variable
let maserati = carMake[2];
console.log(maserati);

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "Acura"];
console.log(carMake);

// ? How to access a nested array?
console.log(carMake[6]);
// ? How to access 'Toyota' within nested array?
console.log(carMake[6][0]);

// Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 6, true],
    false,
    undefined,
    null,
    NaN,
    "some other string",
    maserati
]
console.log(manyDataTypes);

// ? Data Type
console.log(typeof manyDataTypes); // returns object

// ? Checking if data type is an array
console.log(manyDataTypes instanceof Array);


/* 
    !Challene
    * create a variable names mayCohort
    * include your MySpace Top 8
    * Nest an array with instructor's name and TA's names
    * Access one person's name and reassign to their nickname
    * Access Pauls name and reassign to Pablo
    ! spicey mode 
    * create a function called yeet()
        * it takes an array
        * it removes the last entry
        * and returns a new array
        * wrap it in a new variable
*/
console.log("--Challenge--");
let namesMayCohort = ["Ali", "Abusino", "Melissa", "Andy", "Nathan", "Austin", "Amanda", "Dante",["Paul", "Henry", "Alex"]];
namesMayCohort[1] = "Sino";
namesMayCohort[namesMayCohort.length - 1][0] = "Pablo";

console.log(namesMayCohort);

let yeet = function(array) {
    let newArray = array.slice(0, array.length - 1);
    return newArray;
}

let yeetedArray = yeet(namesMayCohort);
console.log(yeetedArray);
