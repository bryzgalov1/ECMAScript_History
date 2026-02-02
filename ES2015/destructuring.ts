
// Деструктуризация объекта
const user = { id: 1, username: "admin", email: "admin@test.com" };
const { username, email } = user;
console.log(username, email); // admin admin@test.com

// Алиасы
const { id: userId } = user;
console.log(userId); // 1

// Деструктуризация массива
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // red
