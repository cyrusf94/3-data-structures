/* 
    ? Array Methods
    * methods are functions that live inside of an object 
    prototype
    * denoted by the . at the end of an object
    * ex: someVariable.toLowerCase();
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Alex Perry", "Henry Dufour", "Mary Reagan"],
    ["Lulu Browne", "Julie Assur"]
]

/*
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
 */

let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"]);
console.log("Value", educationTeam, "Return of .push()", pushReturn);

/* 
    ? .pop()
    * pop removes last array element and returns it 
    * also known as yeet()
*/

let lastElement = educationTeam.pop();
console.log("Value", educationTeam, "Return of .pop()", lastElement);

/* 
    ? .unshift()
    * adds an element to the beginning of an array
    * returns new length of an array
*/

let unshiftReturn = educationTeam.unshift("Arron Blais");
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn);


/* 
    ? .shift()
    * removes the first element from an array
    * returns the removed value
*/

let shiftReturn = educationTeam.shift();
console.log("Value", educationTeam, "Return of .shift()", shiftReturn);

/* 
    ? .includes()
    * checks whether an array a value
    * returns true or false
*/

let langauges = ["English", "German", "Spanish", "Polish", "French"];
console.log(langauges.includes("French"));


// ? Advanced Array Methods

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

for (i = 0; i <= states.length - 1; i++) {
    console.log(states[i]);
}

/* 
    ? .forEach()
    * fires a callback fx on each element of your array
    * callback has three parameters
        * value - the iterable
        * index - of the iterable
        * array - original array .forEach was called upon
*/

states.forEach((state, index, array) => {
    console.log(`State: ${state} - Index: ${index}`)
});


/* 
    ! .forEach Challenge
    finf the longest State
    * creat a function called longestWord
    * the function should take a state array
    * iterate over the array 
    * return the longest state
*/

let longestWord = function(array) {
    let longest = ""
    array.forEach( i => {
        i.length > longest.length ? longest = i : null
    });
    return longest;
}


console.log("Longest state challenege");
console.log(longestWord(states));
/* 
    ? .filter()
    * creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) where else also gets added
    * filter RETURNS values
*/

let statesC = states.filter(state => state[0] == "C");
let statesCC = states.filter(state => state.startsWith("C"));

console.log(statesC);
console.log(statesCC);

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89];


/* 
    ! .filter() Challenege
    * utilize a filter method to filter out grades under 60
*/

let failing = grades.filter(grade => grade < 60);
console.log(failing);

/* 
    ? .map()
    * creates an array with elements resulting from callback fx
*/

let statesUpperCase = states.map(state => state.toUpperCase());


/* 
    ! .map() Challenege
    * utilize map to raise grade by 15 points for everyone
    * those above 90 should not get any points
*/

let gradeAdjust = grades.map(grade => grade < 90 ? grade + 15 : grade);
console.log(gradeAdjust);
