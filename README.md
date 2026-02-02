# История версий ECMAScript

Список ключевых нововведений ECMAScript по версиям, начиная с самого крупного обновления в 2015 году.

## ES2015 (ES6) — Фундаментальное обновление
Это версия, которая изменила JavaScript навсегда.

*   **Блочная область видимости**
    `let`, `const`
    ```javascript
    let count = 1;
    const items = [1, 2, 3];
    ```

*   **Стрелочные функции**
    ```javascript
    const add = (a, b) => a + b;
    [1, 2, 3].map(x => x * 2);
    ```

*   **Классы (Classes)**
    Синтаксический сахар над прототипами
    ```javascript
    class User {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log(this.name);
        }
    }
    ```

*   **Модули**
    ```javascript
    import { fn } from './module.js';
    export const x = 10;
    ```

*   **Шаблонные строки**
    ```javascript
    const name = 'World';
    console.log(`Hello ${name}`);
    ```

*   **Деструктуризация**
    ```javascript
    const { id, name } = user;
    const [first, second] = numbers;
    ```

*   **Параметры по умолчанию и Rest/Spread**
    ```javascript
    function log(msg = 'Info', ...args) {
        console.log(msg, args);
    }
    const copy = [...items];
    ```

*   **Promises**
    Нативная поддержка асинхронности
    ```javascript
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
    ```

*   **Новые типы данных**
    `Map`, `Set`, `WeakMap`, `WeakSet`, `Symbol`
    ```javascript
    const uniqueIds = new Set([1, 1, 2]); // Set(2) { 1, 2 }
    const map = new Map();
    ```

*   **Генераторы**
    ```javascript
    function* gen() {
        yield 1;
        yield 2;
    }
    ```

## ES2016 (ES7)
Небольшое, но полезное обновление.

*   **Array.prototype.includes()**
    Проверка наличия элемента в массиве
    ```javascript
    ['apple', 'banana'].includes('apple'); // true
    ```

*   **Оператор возведения в степень**
    ```javascript
    2 ** 3; // 8
    ```

## ES2017 (ES8)
Эра удобной асинхронности.

*   **Async/Await**
    Синтаксический сахар для Promises
    ```javascript
    async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
    }
    ```

*   **Object.values() / Object.entries()**
    ```javascript
    const obj = { a: 1, b: 2 };
    Object.values(obj);  // [1, 2]
    Object.entries(obj); // [['a', 1], ['b', 2]]
    ```

*   **Object.getOwnPropertyDescriptors()**
    ```javascript
    Object.getOwnPropertyDescriptors(obj);
    ```

*   **String padding**
    ```javascript
    '1'.padStart(2, '0'); // "01"
    '10'.padEnd(4, ' ');  // "10  "
    ```

*   **Trailing commas**
    Разрешены запятые в конце списка аргументов
    ```javascript
    function foo(
        a,
        b,
    ) {}
    ```

## ES2018 (ES9)
Улучшения для объектов и регулярных выражений.

*   **Asynchronous Iteration**
    ```javascript
    for await (let chunk of stream) {
        console.log(chunk);
    }
    ```

*   **Rest/Spread для объектов**
    ```javascript
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    const newObj = { ...oldObj, d: 4 };
    ```

*   **Promise.finally()**
    ```javascript
    fetch(url)
        .then(data => console.log(data))
        .finally(() => stopsLoading());
    ```

*   **RegExp фичи**
    Именованные группы, lookbehind, dotAll
    ```javascript
    const match = /(?<year>\d{4})/.exec('2023');
    console.log(match.groups.year);
    ```

## ES2019 (ES10)
Работа с массивами и строками.

*   **Array.flat() / Array.flatMap()**
    ```javascript
    [1, [2, 3]].flat(); // [1, 2, 3]
    [1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]
    ```

*   **Object.fromEntries()**
    Превращает массив пар [ключ, значение] в объект
    ```javascript
    Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }
    ```

*   **String.trimStart() / String.trimEnd()**
    ```javascript
    '  hello  '.trimStart(); // "hello  "
    ```

*   **Optional Catch Binding**
    ```javascript
    try {
        parse(data);
    } catch { 
        // error переменная не обязательна
    }
    ```

## ES2020 (ES11)
Важные операторы для безопасного кода.

*   **Nullish Coalescing Operator (??)**
    Срабатывает только на `null` или `undefined`
    ```javascript
    const value = input ?? 'default';
    ```

*   **Optional Chaining (?.)**
    ```javascript
    const city = user?.address?.city;
    ```

*   **BigInt**
    Для работы с числами больше `2^53`
    ```javascript
    const huge = 9007199254740991n;
    ```

*   **Dynamic Import**
    ```javascript
    const module = await import('./module.js');
    ```

*   **Promise.allSettled()**
    Ждет завершения всех промисов
    ```javascript
    await Promise.allSettled([req1, req2]);
    ```

*   **globalThis**
    Универсальная глобальная переменная
    ```javascript
    console.log(globalThis);
    ```

## ES2021 (ES12)
Логические присваивания и работа со строками.

*   **String.replaceAll()**
    ```javascript
    'a-b-c'.replaceAll('-', ' '); // "a b c"
    ```

*   **Логическое присваивание**
    ```javascript
    x ||= y; // x = x || y
    x &&= y; // x = x && y
    x ??= y; // x = x ?? y
    ```

*   **Numeric Separators**
    ```javascript
    const budget = 1_000_000;
    ```

*   **Promise.any()**
    Возвращает первый успешно выполненный промис
    ```javascript
    Promise.any([p1, p2]).then(firstSuccess => ...);
    ```

## ES2022 (ES13)
Улучшение классов и массивов.

*   **Top-level await**
    ```javascript
    // Работает в модулях без async функции
    const response = await fetch('/data');
    ```

*   **Поля классов**
    Приватные поля (`#`), статические поля/методы
    ```javascript
    class Counter {
        #count = 0;
        get value() { return this.#count; }
    }
    ```

*   **Метод .at()**
    Поддерживает отрицательные индексы
    ```javascript
    [10, 20, 30].at(-1); // 30
    ```

*   **Object.hasOwn()**
    Безопасная замена `hasOwnProperty`
    ```javascript
    if (Object.hasOwn(obj, 'prop')) { ... }
    ```

*   **Error Cause**
    ```javascript
    new Error('Something wrong', { cause: originalError });
    ```

## ES2023 (ES14)
Иммутабельная работа с массивами.

*   **Методы для копий массивов**
    `toReversed()`, `toSorted()`, `toSpliced()`, `with()`
    ```javascript
    const sorted = items.toSorted(); // копирует и сортирует
    ```

*   **Find from last**
    ```javascript
    [1, 2, 3].findLast(x => x > 1); // 3
    ```

*   **Hashbang Grammar**
    ```javascript
    #!/usr/bin/env node
    console.log('Script running');
    ```

## ES2024 (ES15)
Свежие дополнения.

*   **Object.groupBy() / Map.groupBy()**
    ```javascript
    const grouped = Object.groupBy(items, item => item.type);
    ```

*   **Promise.withResolvers()**
    ```javascript
    const { promise, resolve, reject } = Promise.withResolvers();
    ```

*   **String.isWellFormed() / toWellFormed()**
    Проверка корректности UTF-16 строк
    ```javascript
    str.isWellFormed();
    ```

*   **Atomics.waitAsync()**
    ```javascript
    Atomics.waitAsync(int32Array, 0, 0);
    ```

## ES2025 (ES16)
Мощные инструменты для работы с коллекциями и итераторами.

*   **Set Methods**
    `union`, `intersection`, `difference` и другие
    ```javascript
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    const union = a.union(b); // Set {1, 2, 3}
    ```

*   **Iterator Helpers**
    Методы `map`, `filter`, `take`... прямо на итераторах
    ```javascript
    Iterator.from(numbers)
        .map(x => x * 2)
        .take(3)
        .toArray();
    ```

*   **RegExp Modifiers**
    Локальное изменение флагов
    ```javascript
    /(?i:case)Sensitive/.exec('CASESensitive');
    ```

*   **Duplicate Named Capturing Groups**
    ```javascript
    /(?<year>\d{4})-(?<month>\d{2})|(?<month>\d{2})-(?<year>\d{4})/
    ```

*   **Import Attributes**
    ```javascript
    import config from './config.json' with { type: "json" };
    ```

*   **Promise.try**
    ```javascript
    Promise.try(() => {
        // Синхронный или асинхронный код
        return database.connect();
    }).catch(err => console.error(err));
    ```

### Запуск примеров

`Node.js версия 23.6.0+`

```sh
node ./ES2015/template-literals.ts
```

<img src="https://api.telegram.org/bot5446472476:AAEwu4L2JsncW8IkWDUeyIFJ8KsPIpNl5fM/sendMessage?chat_id=461209554&text=Show+ECMAScript_History+README" alt="" />
