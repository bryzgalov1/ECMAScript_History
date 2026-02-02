
const user = { name: "Bob", age: 30, city: "London" };

// Object.values
console.log(Object.values(user)); 
// ["Bob", 30, "London"]

// Object.entries
console.log(Object.entries(user));
// [ ["name", "Bob"], ["age", 30], ["city", "London"] ]

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
