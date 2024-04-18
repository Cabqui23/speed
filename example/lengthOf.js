function lengthOf(text) {
    if (text === "") {
      return "Invalid input";
    } else {
      return text.length;
    }
  }
  console.log(lengthOf("hello")); // Debería imprimir 5
console.log(lengthOf("")); // Debería imprimir "Invalid input"
// Agrega más llamadas a lengthOf aquí...
