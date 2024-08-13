// Default backwards-compatible 'any' type (don't use this because it defeats the purpose of TypeScript)

let myVar;
myVar = 42;
myVar = "text";

let myVarWithExplicitAnyType: any;
myVarWithExplicitAnyType = 42;
myVarWithExplicitAnyType = "text";

// Primitives: string, number, boolean, null, undefined

let age: number;
age = 12;
age = "12"; // errors

let userName: string = "";
userName = "Damian";
userName = 42; // errors

let isActive: boolean = false;
isActive = true;
isActive = "true"; // errors

// More complex types: arrays, objects

let hobbies: string[] = []; // An array of strings
hobbies.push("photography");
hobbies.push(false); // errors
hobbies.push(42); // errors

let lottoNumbers: number[]; // An array of numbers
lottoNumbers = [1, 2, 3];
lottoNumbers = ["1", "2", "3"]; // errors

let switchesCombination: boolean[]; // An array of booleans
switchesCombination = [true, false, true];
switchesCombination = ["true", "false", "true"]; // errors

let person: {
  name: string;
  age: number;
}; // Object type definition

person = {
  name: "Damian",
  age: 43,
  occupation: "Software Developer", // errors
};

let people: {
  name: string;
  age: number;
}[]; // Array of objects

people = [
  {
    name: "Damian",
    age: 43,
    occupation: "Software Developer", // errors
  },
  "someone else", // errors
];

// Function types, parameters
