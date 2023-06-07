/* 
    ? State Machines
    * allow us to associate strings with a list of other values
    * quick and efficient 
    * prevent malformed decisions
    * system with finite and defined states
    * info is reliant upon logic in order to transition or be reassigned
*/

let states = {
    il: "Illinois", 
    vt: "Vermont",
    in: "Indiana"
}

function lookUpState(state) {
    return states[state];
}

console.log(lookUpState("il"));

let light = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yeild: ["red"]
}

let currentState = "green";

function enterState(newState) {
    // assigns values of state to property matching current state
    let validTransition = light[currentState]
    if (validTransition.includes(newState)) {
        currentState = newState;
        console.log(currentState);
    } else {
        throw new Error(`Invalid state transition for ${currentState} to ${newState}`);
    }
}

enterState("yellow")