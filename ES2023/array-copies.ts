
const numbers = [3, 1, 4, 1, 5];

// sort() мутирует массив. toSorted() возвращает новый.
const sorted = numbers.toSorted();
console.log(numbers); // [3, 1, 4, 1, 5]
console.log(sorted);  // [1, 1, 3, 4, 5]

// toReversed()
const reversed = numbers.toReversed();

// toSpliced() - аналог splice, но без мутации
const spliced = numbers.toSpliced(1, 2, 999); 
// Удалить 2 элемента начиная с индекса 1, вставить 999

// with() - заменить 1 элемент без мутации
const replaced = numbers.with(0, 100); 
console.log(replaced); // [100, 1, 4, 1, 5]
