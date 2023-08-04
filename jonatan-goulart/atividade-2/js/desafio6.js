/*
Forme um objeto juntando os valores dos outros objetos abaixo em uma linha, utilizando ES6:

const appearence = { eyes: 'blue', hair: 'brown', height: 'tall' };
const professional = { job: 'developer', studying: true, experienceYears: 2  };
const misc = { hobby: 'games', havePet: true };

const person = ?
*/

const appearence = { eyes: 'blue', hair: 'brown', height: 'tall' };
const professional = { job: 'developer', studying: true, experienceYears: 2 };
const misc = { hobby: 'games', havePet: true };

const person = {...appearence, ...professional, ...misc };

console.log(person);