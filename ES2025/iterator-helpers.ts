
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

// Создание "помощника" итератора
const iter = Iterator.from(numbers());

const result = iter
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .toArray(); // Преобразование в массив (или .forEach, .reduce)

console.log(result); // [20, 40]

// Бесконечные последовательности
function* infinite() {
  let i = 0;
  while(true) yield i++;
}

const taken = Iterator.from(infinite())
  .drop(5) // Пропустить первые 5
  .take(3) // Взять следующие 3
  .toArray();

console.log(taken); // [5, 6, 7]
