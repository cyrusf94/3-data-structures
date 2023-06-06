/* 
? Objects
* conatianers for values in javaScript Object Notation format
(JSON)
* exists as a string
* denoted by { }
* not indexable
* comma seperated key-values pairs || properties: values
* has properties and methods
    * .propery (ex: .length)
    * .method() (ex: .toUpperCase())
*has .this keyword
*/

//? Object Literal Creation

let obj = {};
console.log(obj); //object literal
console.log(typeof obj);
console.log(obj instanceof Object);

let student = new Object({
    // property; value,
    // key: value,
    name: "Melissa",
    age: 24,
    isTeacher: true,
    cohort: "sbd-may-23"
});

console.log(student);

let bently = {
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

// ? Pretty display in a table
console.table(bently);

// ? Accessing properties and values

// ? Access using dot notation (member access operator)
console.log(bently.weight);

// ? Access using keys
console.log(Object.keys(bently));
// returns array of object keys
console.log(Object.values(bently));
// returns array of object values

// ! prototyping
function animal(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
}

let ollie = new animal("ollie", 2, "dog");
// !prototyping

/*
    ! Challenge 
    * How would you iterate over Bentleys favortie activity?
    * HINT: you can use forEach
 */

bently.favoriteActivity.forEach(i => 
    console.log(i)
    );

// ? Adding properties and values

let car = {
    make: "BMW",
    model: "M5",
    mileage: 27344
}

car.chassis = "F10";
console.log(car);
car["transmission"] = "DCT";
console.log(car);

// ? Modifying properties and values

car.mileage = 34100;
console.log(car)

// ? Other way of modification
/* 
    * 1. reassign property
    * 2. assign new value to new property
    * 3. delete old property
*/

car["make"] = car["manufacturer"];
car.manufacturer = "BMW";
delete car.make;
console.log(car);

/* 
    * Makeshift example of a database and an incoming object
    * Matching passwords between db and incoming object
*/

let incoming = {
    username: "mrpndev",
    password: "dbLocal"
}

let db = [
    {username: "mrpndev", password: "dbLocal" },
    {username: "melduch", password: "teacher123" },
    {username: "cfull15", password: "mechanic123" },
]

let login = (request) => {
    // 1. Find the user looping over our db, and if found, store in a variable
    let foundUser = db.filter(u => u.username === request.username)
    if (foundUser.length === 0) {
        console.log("User not found");
    } else {
        foundUser[0].password === request.password
        ? console.log("User logged in")
        : console.log("incorrect password")
    }
    }

login(incoming);

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

/* 
    ! Cahllenge
    * console log "Pilot"
    * add a season 3
    * season 3 will be an object with properties of
    * numberOfEpisodes & episodeInfo
    * episodeInfo will be an array of 2 objects
    * two objects will have properties of episodes * episodeName
    * fabricate their values 
    * assign property called totalSeasons to the netflix object
    with a value of what a total seasons are
*/

console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName);
netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        
            { episode: "1" , episodename: "the new one "},
            { episode: "2", episodeName: "the second one"}
        ]
}

netflix.seasonInfo.totalSeasons = Object.keys(netflix.seasonInfo).length;
console.log(netflix.seasonInfo);