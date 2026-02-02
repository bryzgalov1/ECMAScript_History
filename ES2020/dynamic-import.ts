
// Динамический импорт возвращает промис
async function loadModule() {
  if (Math.random() > 0.5) {
    // const module = await import('./utils.js');
    // module.doSomething();
    console.log("Module loaded conditionally");
  }
}

loadModule();
