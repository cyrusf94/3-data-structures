/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based langauge with access to 00P
    * Classes are considered special functions. they can be 
    defined as:
        * class declaration
        * class expressions
    ! Classes are not hoisted
*/

// ? Class Declaration

class Teacher {
    // method used to create and initialize an object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
        this.schoolCountry = "United States";
    }
}

// ? create a new instance of a Teacher class
let paul = new Teacher("Paul", "SD", 3, true);
console.log(paul);
console.log(typeof paul); // returns Object
console.log(paul instanceof Teacher); // returns true
console.log(paul instanceof Object); // returns true
console.log(Teacher instanceof Object); // returns true

// Can use limited object methods on the instance
console.log(Object.keys(paul), Object.values(paul));

let onj = {
    name: "Paul",
    displayName() {
        console.log(this.name);
    }
};

// ? Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }
};

let $1007OrangeSt = new House("1007 Orange St", 3, 2);
console.log($1007OrangeSt);

class NoConstruc {
    // if no constructor, default constructor is used
};