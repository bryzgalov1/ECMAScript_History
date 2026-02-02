
// Раньше: ошибка SyntaxError: Duplicate capture group name
// Теперь можно использовать одно имя в разных ветках альтернативы (|)

const dateStr = "2025-02-02"; // YYYY-MM-DD
const dateStrEU = "02-02-2025"; // DD-MM-YYYY

// Одна регулярка для обоих форматов с одним именем группы 'year'
const regex = /(?<year>\d{4})-\d{2}-\d{2}|\d{2}-\d{2}-(?<year>\d{4})/;

const result1 = regex.exec(dateStr);
console.log(result1?.groups?.year); // "2025"

const result2 = regex.exec(dateStrEU);
console.log(result2?.groups?.year); // "2025"
