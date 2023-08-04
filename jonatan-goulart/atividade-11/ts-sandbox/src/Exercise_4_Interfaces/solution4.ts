// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 4 – Interfaces
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Demonstrate structural typing (duck typing)
// • Create an interface and implement it on a class
// • Differentiate type aliases from interfaces

export default () => {
  // ======== Exercise 4.1 ========
  // Instructions:
  // • Create an interface `CartItem` and replace the param's type with it
  // • Make variantId optional

  class addToCartItem implements cartItem {
    addToCart(item: { id: number; title: string; variantId?: number }): void {
      console.log("[Exercise 4.1]", `Adding "${item.title}" to cart.`);
    }
  }

  interface cartItem {
    addToCart(item: { id: number; title: string; variantId?: number }): void;
  }

  const cart = new addToCartItem();

  cart.addToCart({ id: 1, title: "Concrete shoes" });

  // ======== Exercise 4.2 ========
  // Instructions:
  // • Create and implement an interface on `Person` to ensure it always has accessible
  //   `name` and `age` member properties.

  class Person implements PersonInterface {
    constructor(public name: string, public age: number) {}
  }

  interface PersonInterface {
    name: string;
    age: number;
  }

  const jane = new Person("Jane", 31);

  console.log("[Exercise 4.2]", `${jane.name} is ${jane.age} years old.`);

  // ======== Exercise 4.3 ========
  // Instructions:
  // • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
  // • Extend the existing interface `City` (without modifying it inline) by adding a
  //   `coords` property of type `Coords`.
  // • Fix whatever is wrong with `tampa`

  // [do not edit] (pretend this is coming from external `foo.d.ts` lib)
  interface City {
    name: string;
    coords: Coords;
  }
  // [/do not edit]

  interface Coords extends City {
    latitude: number;
    longitude: number;
  }

  const montreal = {
    coords: {
      latitude: 42.332,
      longitude: -73.324,
    },
    name: "Montréal",
  } as City;

  const tampa = {
    coords: {
      latitude: 27.9478,
      longitude: -82.4584,
    },
    name: "Tampa",
  } as City;

  function getCityInfo(city: City) {
    const coords = `(${city.coords.latitude.toFixed(
      3
    )}, ${city.coords.longitude.toFixed(3)})`;
    return `${city.name.toUpperCase()} is located at ${coords}.`;
  }

  console.log(
    "[Exercise 4.3]",
    `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`
  );

  // ======== Exercise 4.4 ========
  // The purpose of this exercise is simply to illustrate a use of `readonly`

  interface UserSchema {
    readonly id: number;
    name: string;
  }

  class User implements UserSchema {
    constructor(public name: string, readonly id: number) {}
  }

  const user = new User("Dog", 1);

  console.log(user.id); // readable

  user.name = "Harold"; // writable
  //user.id = 5; // not writable

  console.log(`User:`, user);
};
