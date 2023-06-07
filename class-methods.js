/* 
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.transmission = transmission;
    }

    greetDriver(driver) {
        return `Hello ${driver}, your ${this.make} is awesome`;
    }
}

let maserati = new Car("Maserati", "GranTurismo", 2015, "auto");
console.log(maserati.greetDriver("Paul"));

/* 
    ? Inheritance 
    * extends a parent class with child class
*/

class CarForSale extends Car {
    constructor(make, model, year, transmission, mileage, price) {
        // allows access to properties and methods of a parent class
        super(make, model, year, transmission)
        this.mileage = mileage;
        this.price = price;
    }

    isCPO(currentYear) {
        return currentYear - this.year >= 6 
            ? `Your ${this.model} is out of warrenty`
            : `Your warrenty is still active`
    }
}

let bmw = new CarForSale("BMW", "M3", 2008, "manual", 27000, 50000)
console.log(bmw);
console.log(bmw.greetDriver("Aaron"));
console.log(bmw.isCPO(2023));


/* 
    ? Factory Functions
    * functions that accept data and return new instace of a class
*/

class Circle {
    constructor(radius) {
        typeof radius == "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

    area() {
        return (this.radius ** 2 * Math.PI).toFixed(2)
    }
}

let myCircle = new Circle(7);
console.log(myCircle.circumference(), myCircle.area());

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2);
}

let newCircle = circleFromDiameter(25);
console.log(newCircle, newCircle.circumference());

/* 
    ? Static Factory Methods
    * do not require instantiation with "new" operator
    * create an instance of our class through its method
*/

class CircleStaticFactoryFx {
    static createCircleUsingDiameter(diameter) {
        return new CircleStaticFactoryFx(diameter / 2)
    }
    constructor(radius) {
        typeof radius == "number"
        ? this.radius = radius
        : new Error("Radius must be a number")
    }
}

let diaCircle = CircleStaticFactoryFx.createCircleUsingDiameter(20);
console.log(diaCircle);

class Human {
    static generateHuman(name) {
        return new Human(name)
    }

    constructor(name) {
        this.name = name;
    }
}

let aaron = Human.generateHuman("Aaron")
console.log(aaron);
console.log('-------------------Challenge------------------------')
/* 
    ! Avengers Challenge
    * create a class called Avengers
    * use properties of name, superpower, age, isDead, and keyMovie
    * create a class instance with those properties
    * create a method that logs the name and key movie together
    ! Spicey Mode
    * create a method that takes the name of the superhero
    * check it against two arrays, teamCap and teamStark
    * return which team the superhero was on as part of Civil War
    HINT: Stark: Iron Man, Tony Stark, Spider Man, Rhodes, Black Widow, Black Panther, Vision
    Captain: Captain America, Steve Rogers, Falcon, Bucky, Hawkeye, Wanda, Ant Man
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name;
        this.superpower = superpower;
        this.age = age;
        this.isDead = isDead;
        this.keyMovie = keyMovie;
    }

    whatMovie() {
        return `Name: ${this.name}, Key Movie: ${this.keyMovie}`;
    }

    whatTeam() {
        let teamCaptain = ["Captain America", "Falcon", "Bucky", "Hawkeye", 
        "Wanda", "Ant Man"];
        let teamStark = ["Iron Man", "Tony Stark", "Spider Man", "Rhodes", "Black Widow", 
        "Black Panther", "Vision"];

        if (teamCaptain.includes(this.name)) {
            return `${this.name} is Team Captain`;
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Stark`;
        } else {
            return `${this.name} is not on either team`;
        }

    }
}

let ironMan = new Avengers("Tony Stark", "Powersuit", 46, true, "Iron Man 3");
console.log(ironMan);
console.log(ironMan.whatMovie());
console.log(ironMan.whatTeam());

