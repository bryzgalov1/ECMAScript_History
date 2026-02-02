
let a: number | undefined = undefined;
let b = 10;

// a ||= 20;  // То же, что a = a || 20
// a &&= 30;  // То же, что a = a && 30
// a ??= 40;  // То же, что a = a ?? 40

let x = 0;
x ||= 100; // x = 0 || 100 -> 100
console.log(x);

let y = 0;
y ??= 100; // y = 0 (0 не null/undefined)
console.log(y);
