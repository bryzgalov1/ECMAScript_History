# История версий ECMAScript

Список ключевых нововведений ECMAScript по версиям, начиная с самого крупного обновления в 2015 году.

### ES2015 (ES6) — Фундаментальное обновление
Это версия, которая изменила JavaScript навсегда.
*   **Блочная область видимости:** `let`, `const`.
*   **Стрелочные функции:** `() => {}`.
*   **Классы (Classes):** Синтаксический сахар над прототипами.
*   **Модули:** `import`, `export`.
*   **Шаблонные строки:** \`Hello ${name}\`.
*   **Деструктуризация:** `const { id } = user`.
*   **Параметры по умолчанию и Rest/Spread:** `(a, b=1)`, `...args`, `[...arr]`.
*   **Promises:** Нативная поддержка асинхронности.
*   **Новые типы данных:** `Map`, `Set`, `WeakMap`, `WeakSet`, `Symbol`.
*   **Генераторы:** `function*`, `yield`.

### ES2016 (ES7)
Небольшое, но полезное обновление.
*   **Array.prototype.includes():** Проверка наличия элемента в массиве (вместо `indexOf` !== -1).
*   **Оператор возведения в степень:** `2 ** 3` (вместо `Math.pow(2, 3)`).

### ES2017 (ES8)
Эра удобной асинхронности.
*   **Async/Await:** Синтаксический сахар для Promises.
*   **Object.values() / Object.entries():** Получение значений и пар [ключ, значение] объекта.
*   **Object.getOwnPropertyDescriptors():** Для полного клонирования свойств.
*   **String padding:** `padStart()`, `padEnd()`.
*   **Trailing commas:** Разрешены запятые в конце списка аргументов функций.

### ES2018 (ES9)
Улучшения для объектов и регулярных выражений.
*   **Asynchronous Iteration:** `for await (let item of iterable)`.
*   **Rest/Spread для объектов:** `const { x, ...y } = obj`.
*   **Promise.finally():** Выполнить код независимо от успеха или ошибки промиса.
*   **RegExp фичи:** Именованные группы захвата (`(?<name>...)`), lookbehind (`(?<=...)`), флаг `s` (dotAll).

### ES2019 (ES10)
Работа с массивами и строками.
*   **Array.flat() / Array.flatMap():** Выравнивание вложенных массивов.
*   **Object.fromEntries():** Обратное действие к `Object.entries` (превращает массив пар в объект).
*   **String.trimStart() / String.trimEnd():** Удаление пробелов.
*   **Optional Catch Binding:** `try { ... } catch { ... }` (без указания переменной `error`).

### ES2020 (ES11)
Важные операторы для безопасного кода.
*   **Nullish Coalescing Operator (??):** `x ?? 'default'` (срабатывает только на `null` или `undefined`).
*   **Optional Chaining (?.):** `user?.address?.street`.
*   **BigInt:** Тип для работы с числами больше `2^53`.
*   **Dynamic Import:** `import('./module.js')`.
*   **Promise.allSettled():** Ждет завершения всех промисов (независимо от успеха).
*   **globalThis:** Универсальная глобальная переменная (window/global).

### ES2021 (ES12)
Логические присваивания и работа со строками.
*   **String.replaceAll():** Замена всех вхождений подстроки.
*   **Логическое присваивание:** `||=`, `&&=`, `??=`.
*   **Numeric Separators:** `1_000_000` (для читаемости кода).
*   **Promise.any():** Возвращает первый успешно выполненный промис.

### ES2022 (ES13)
Улучшение классов и массивов.
*   **Top-level await:** Использование `await` вне async-функции (в модулях).
*   **Поля классов:** Приватные поля (`#field`), статические поля/методы.
*   **Метод .at():** Получение элемента по индексу (поддерживает отрицательные индексы, `arr.at(-1)`).
*   **Object.hasOwn():** Безопасная замена `hasOwnProperty`.
*   **Error Cause:** `new Error('message', { cause: err })`.

### ES2023 (ES14)
Иммутабельная работа с массивами.
*   **Методы для копий массивов:** `toReversed()`, `toSorted()`, `toSpliced()`, `with()` — возвращают новый массив, не мутируя исходный.
*   **Find from last:** `findLast()`, `findLastIndex()`.
*   **Hashbang Grammar:** Поддержка `#!/usr/bin/env node` в начале файла.

### ES2024 (ES15)
Свежие дополнения.
*   **Object.groupBy() / Map.groupBy():** Группировка элементов (аналог `_.groupBy` из lodash).
*   **Promise.withResolvers():** Удобное создание промиса с доступом к `resolve` и `reject` снаружи.
*   **String.isWellFormed() / toWellFormed():** Проверка корректности UTF-16 строк.
*   **Atomics.waitAsync():** Асинхронное ожидание на разделяемой памяти.

### ES2025 (ES16)
Мощные инструменты для работы с коллекциями и итераторами.
*   **Set Methods:** Встроенные операции над множествами: `union()`, `intersection()`, `difference()`, `symmetricDifference()`, `isSubsetOf()`, `isSupersetOf()`, `isDisjointFrom()`.
*   **Iterator Helpers:** Методы для работы с итераторами: `map()`, `filter()`, `take()`, `drop()`, `flatMap()`, `reduce()`, `toArray()`, `forEach()`, `Iterator.from()`.
*   **RegExp Modifiers:** Локальное изменение флагов внутри регулярного выражения `(?im-s:...)`.
*   **Duplicate Named Capturing Groups:** Использование одинаковых имен групп в альтернативах `(?<year>...)|(?<year>...)`.
*   **Import Attributes:** Синтаксис `import ... with { type: "json" }`.
*   **Promise.try:** Запуск функции (синхронной или асинхронной) и возврат промиса.


### Запуск примеров

`Node.js версия 23.6.0+`

```sh
node ./ES2015/template-literals.ts
```

<img src="https://api.telegram.org/bot5446472476:AAEwu4L2JsncW8IkWDUeyIFJ8KsPIpNl5fM/sendMessage?chat_id=461209554&text=Show+ECMAScript_History+README" alt="" />
