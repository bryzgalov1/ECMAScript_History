
const entries: [string, number][] = [["a", 1], ["b", 2]];

// Преобразование массива пар обратно в объект
const obj = Object.fromEntries(entries);
console.log(obj); // { a: 1, b: 2 }

// Удобно использовать после Object.entries и трансформаций
const original = { x: 1, y: 2, z: 3 };
const filtered = Object.fromEntries(
  Object.entries(original).filter(([key, val]) => val > 1)
);
console.log(filtered); // { y: 2, z: 3 }
