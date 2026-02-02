
// let - блочная область видимости
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10

// const - константа (нельзя переопределить ссылку)
const PI = 3.14;
// PI = 3.15; // Ошибка: Assignment to constant variable.

// const с объектами (мутация разрешена)
const user = { name: "Alice" };
user.name = "Bob"; // Работает
console.log(user.name); // Bob
