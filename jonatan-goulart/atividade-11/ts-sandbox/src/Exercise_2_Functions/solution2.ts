// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Functions
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Convert existing JavaScript functions to TypeScript
// • Understand functions as types
// • Convert specifically-typed functions to more
//   flexible generic functions

export default () => {
  // ======== Exercise 2.1 ========
  // Instructions:
  // • Add explicit parameter types and return type
  // • Fix any errors resulting from invalid types

  function add(x: number, y: number) {
    return x + y;
  }

  function sumArray(n: number[]) {
    return n.reduce(add, 0);
  }

  const someSum = sumArray([3, 6, 9]);

  console.log("[Exercise 2.1]", `3 + 6 + 9 === ${someSum}`);

  // ======== Exercise 2.2 ========
  // Instructions:
  // • Add explicit parameter types and return types to the `deposit` function
  // • Make the function's `message` parameter *optional*

  const bankAccount = {
    money: 0,
    deposit(value: number, message: string) {
      this.money += value;
      if (message) {
        console.log(message);
      }
    },
  };

  bankAccount.deposit(20, "Deposit received");
  bankAccount.deposit(10, "Deposit received");

  console.log("[Exercise 2.2]", `Account value: $${bankAccount.money}`);

  // ======== Exercise 2.3 ========
  // For a given word, we compute its Scrabble® score.
  // Instructions:
  // • Add type annotations wherever possible

  function computeScore(word: string) {
    const letters = word.toUpperCase().split("");
    return letters.reduce((accum, curr) => (accum += getPointsFor(curr)), 0);
  }

  function getPointsFor(letter: string) {
    const lettersAndPoints = [
      ["AEOIULNRST", 1],
      ["DG", 2],
      ["BCMP", 3],
      ["FHVWY", 4],
      ["K", 5],
      ["JX", 8],
      ["QZ", 10],
    ];

    return lettersAndPoints.reduce(
      (computedScore: number, pointsTuple: [string, number]) => {
        const [letters, score] = pointsTuple;
        if (letters.split("").find((ll) => ll === letter)) {
          return (computedScore += score);
        }
        return computedScore;
      },
      0
    );
  }

  console.log("[Exercise 2.3]", `zoo is worth ${computeScore("zoo")} points.`);

  // ======== Exercise 2.4 ========
  // Instructions:
  // • Add explicit parameter types and return types
  // • Add a default greeting: "hello"

  function greet(greeting: string) {
    return greeting.toUpperCase();
  }

  const defaultGreeting = greet("Hello, how you been?");
  const portugueseGreeting = greet("Oi, como vai?");

  console.log("[Exercise 2.4]", defaultGreeting, portugueseGreeting);

  // ======== Exercise 2.5 ========
  // Instructions:
  // • Add parameter type annotation
  // • Even though this function doesn't return, add an explicit return type

  function layEggs<String>(quantity: number, color: string) {
    console.log(
      `[Exercise 2.5] You just laid ${quantity} ${color} eggs. Good job!`
    );
  }

  layEggs(1, "Red");

  // ======== Exercise 2.6 ========
  // Here we've initialized two variables with function types.
  // Later we assign them to functions.
  // Instructions:
  // • Fix the errors

  let multiply: (val1: number, val2: number) => number;
  let capitalize: (val: string) => string;

  capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  };

  multiply = function (x: number, y: number): number {
    return x * y;
  };

  console.log("[Exercise 2.6]", capitalize(`nifty ${multiply(5, 10)}`));

  // ======== Exercise 2.7 ========
  // Currently, our function `pushToCollection` accepts *any* item and adds it,
  // (indiscriminantly) to *any* kind of array.
  //
  // A couple problems with this:
  //
  //     1. The `any` type causes us to lose ALL typing information on our params.
  //     2. This looseness has come back to back to bite us during runtime. (Just
  //        look at `incrementByTwo`!)
  //
  // Instructions:
  // • Implement `pushToCollection` as a generic function. (This should create
  //   compile-time errors in places where incorrect values are being added to
  //   a given collection. Fix these values to the correct types.)
  // • Once made generic, `pushToCollection` should be *generic* enough to operate
  //   on items and collections of any type while continuing to enforce that they match.

  const numberCollection: number[] = [];
  const stringCollection: string[] = [];

  function pushToCollection(item: any, collection: any) {
    collection.push(item);
    return collection;
  }

  // Add some stuff to the collections
  pushToCollection(false, stringCollection);
  pushToCollection("hi", stringCollection);
  pushToCollection([], stringCollection);

  pushToCollection("1", numberCollection);
  pushToCollection("2", numberCollection);
  pushToCollection("3", numberCollection);

  const incrementedByTwo = numberCollection.map((num) => num + 2);

  console.log(
    "[Exercise 2.7]",
    `[${incrementedByTwo}] should deeply equal [3,4,5]`
  );
};
