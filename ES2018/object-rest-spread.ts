
const person = { name: "Alice", age: 25, city: "Paris", job: "Dev" };

// Rest свойства
const { name, ...details } = person;
console.log(name);    // "Alice"
console.log(details); // { age: 25, city: "Paris", job: "Dev" }

// Spread свойства (копирование/слияние)
const personCopy = { ...person, active: true };
console.log(personCopy);
