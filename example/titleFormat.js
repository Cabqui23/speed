function titleFormat(text) {
    const firstLetter = text.charAt(0).toUpperCase();
    const restOfTitle = text.slice(1).toLowerCase();
    const formattedTitle = firstLetter + restOfTitle;
    return formattedTitle;
  }
  console.log(titleFormat("hello world")); // Debería imprimir "Hello world"
console.log(titleFormat("HELLO world")); // Debería imprimir "Hello world"
console.log(titleFormat("HellO WOrLd")); // Debería imprimir "Hello world"
