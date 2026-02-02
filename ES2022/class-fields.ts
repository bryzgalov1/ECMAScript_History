
class Counter {
  // Публичное поле
  count = 0;
  
  // Приватное поле
  #secret = 42;

  // Статическое поле
  static INSTANCES = 0;

  // Статический блок инициализации
  static {
    console.log("Counter class loaded");
  }

  constructor() {
    Counter.INSTANCES++;
  }

  checkSecret() {
    // Доступ к приватному полю только внутри класса
    return this.#secret === 42;
  }
}

const c = new Counter();
// console.log(c.#secret); // Ошибка
console.log(c.checkSecret()); // true
