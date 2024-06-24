// const animals = require("./animals");

// const birthYear = 1994;
// const firstName = "gmee";
// const lastName = "hud";
// const age = new Date().getFullYear() - birthYear;

// console.log(`hello, my name is ${firstName} ${lastName} and i am ${age}`);

//list of function mathematical operations
//add, subtract, multiply, divide

// mcam mana nak jadikan 3 element di bawah mempunyai files sendri
//jom try

//math-module (file name)
//list of const methamatical
// pi, golden ratio, euler's numbers
// const pi = 3.14159;
// const goldenRatio = 1.61803;
// const eulwesNumber = 2.71828;

//animal-module (file name)
//list of animals based on habitat
// const wildLifeAnimals = ["🙈", "🐶", "🐺", "🐱", "🦁"];
// const farmAnimals = ["🐖", "🐄", "🐏", "🐐", "🐫"];
// const pets = ["🐇", "🐿", "🦔", "🦨", "🦘"];

//chemistry-module (file name)
//list of chemistry elements based on group
// const alkaliMetal = ["Li", "Na", "K", "Rb", "Cs"];
// const nobleGases = ["He", "Ne", "Ar", "Kr", "Xe"];
// const halogens = ["F", "Cl", "Br", "i", "At"];

const animals = require("./animals.js");
const chemistry = require("./chemElement.js");
const math = require("./math.js");

console.log(math.pi, math.goldenRatio, math.eulwesNumber);
console.log(animals.wildLifeAnimals, animals.farmAnimals, animals.pets);
console.log(chemistry.alkaliMetal, chemistry.nobleGases, chemistry.halogens);
