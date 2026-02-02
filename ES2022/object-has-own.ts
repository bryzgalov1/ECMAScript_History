
const obj = Object.create(null);
obj.prop = "exists";

// Опасный старый способ (если obj.hasOwnProperty переопределен или obj=null prototype)
// obj.hasOwnProperty("prop"); 

// Новый безопасный способ
if (Object.hasOwn(obj, "prop")) {
  console.log("Prop exists");
}
