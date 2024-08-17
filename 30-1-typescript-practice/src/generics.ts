// TypeScript generics

// NOTE: Generics are a feature that allows you to create reusable components or functions
// that can work ● with a variety of types ● , rather than a single one. They provide a way
// ● to make components type-safe and flexible ●  by allowing you to define ● placeholders ● for
// types that can be specified later when the component is used.

// Function with generics
function addTypedElementToArray<T>(element: T, array: T[]): T[] {
  return [...array, element];
}

const myTypedArray = addTypedElementToArray<number>(42, [1, 2, 3]);
console.log(myTypedArray);

// Function with multiple generics
function addMultiTypedElementsToArray<T, U>(
  element1: T,
  element2: U,
  array: (T | U)[]
): (T | U)[] {
  return [...array, element1, element2];
}

const myMultiTypedArray = addMultiTypedElementsToArray<number, string>(
  42,
  "hello",
  [1, 2, 3]
);
console.log(myMultiTypedArray);
const myMultiTypedArray2 = addMultiTypedElementsToArray<number, string>(
  42,
  "hello",
  [1, 2, "a string"]
);
console.log(myMultiTypedArray2);

// Class generics
class myGenericsBox<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const myBox = new myGenericsBox<number>(42);
console.log(myBox.getContent());
const myBox2 = new myGenericsBox<string>("a cat");
console.log(myBox2.getContent());

// Interface generics
interface MyObject<T, U> {
  a: U;
  b: T;
}

const myObject: MyObject<number, string> = {
  a: "a string",
  b: 42,
};
console.log(myObject);
