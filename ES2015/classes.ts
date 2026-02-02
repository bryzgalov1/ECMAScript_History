
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Переопределение метода
  speak() {
    console.log(`${this.name} лает.`);
  }
}

const dog = new Dog("Рекс");
dog.speak(); // Рекс лает.
