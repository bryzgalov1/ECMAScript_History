
function log(
  a: string,
  b: string, // запятая в конце теперь законна и не вызывает ошибок
) {
  console.log(a, b);
}

log(
  "Hello",
  "World",
);

const arr = [
  1,
  2,
  3, // удобно при diff-ах в git
];
