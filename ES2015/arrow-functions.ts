
// Обычная функция
const add = function(a: number, b: number): number {
  return a + b;
};

// Стрелочная функция с неявным возвратом
const addArrow = (a: number, b: number): number => a + b;

// Контекст this (лексический this)
class Counter {
  count = 0;
  
  increment() {
    // В обычной функции this мог потеряться
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
