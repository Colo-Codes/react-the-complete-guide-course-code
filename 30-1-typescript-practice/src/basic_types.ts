// TypeScript basic types
type MyObjectType = { a: string; b: number };

const myAny = ["a", 12];
const myNull: null = null;
const myUndefined: undefined = undefined;
const myString: string = "hi";
const myNumber: number = 42;
const myBoolean: boolean = true;
const myArray: string[] = ["a", "b"];
const myObject: MyObjectType = {
  a: "my name",
  b: 43,
};

console.log(myAny);
console.log(myNull);
console.log(myUndefined);
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);
console.log(myObject);

let myUnion: string | number;
myUnion = "this is a tring";
console.log(myUnion);
myUnion = 34;
console.log(myUnion);

const myTuple: [number, string, boolean] = [42, "the answer", true];
console.log(myTuple);

function myFunction1(a: number, b: number): void {
  console.log(a + b);
}
myFunction1(100, 42);

const myFunction2: (a: number, b: number) => void = (a, b) => {
  console.log(a + b);
};
myFunction2(200, 42);
