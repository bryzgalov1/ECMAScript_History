
const str = "Dog is good. Dog is funny.";

// Раньше: str.replace(/Dog/g, "Cat")
console.log(str.replaceAll("Dog", "Cat"));
// "Cat is good. Cat is funny."
