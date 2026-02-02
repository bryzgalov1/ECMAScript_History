
// Именованные группы захвата
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = dateRegex.exec("2023-10-05");
if (result && result.groups) {
  console.log(result.groups.year);  // "2023"
  console.log(result.groups.month); // "10"
}

// Lookbehind assertions (проверка того, что перед совпадением)
const priceRegex = /(?<=\$)\d+/; // Ищет цифры, перед которыми стоит $
console.log(priceRegex.exec("$100")![0]); // "100"

// s (dotAll) flag - точка совпадает с переносом строки (\n)
console.log(/foo.bar/s.test("foo\nbar")); // true
