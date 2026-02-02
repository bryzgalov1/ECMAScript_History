
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// Группировка в объект
// (Требует полифилл или новейшую версию среды)
/*
const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);
/*
{
  vegetables: [{ name: "asparagus", ... }],
  fruit: [{ name: "bananas", ... }, { name: "cherries", ... }],
  meat: [{ name: "goat", ... }, { name: "fish", ... }]
}
*/
