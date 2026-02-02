
// Import Attributes (ранее Import Assertions)
// Позволяет безопасно импортировать JSON (и в будущем CSS/HTML)

// Только через динамический import (для примера в TS файле) или import statement

/*
import config from "./config.json" with { type: "json" };
console.log(config.version);
*/

// Динамический импорт
async function loadConfig() {
  // @ts-ignore
  const module = await import("./config.json", {
    with: { type: "json" }
  });
  console.log(module.default);
}
