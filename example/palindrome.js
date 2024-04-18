function palindrome(text) {
    // Divide la cadena en caracteres individuales, invierte la lista y luego la une
    const reversedText = text.split('').reverse().join('');
    
    // Verifica si la cadena original es igual a la cadena invertida
    return text === reversedText;
  }
  console.log(palindrome("hello")); // Debería imprimir false
console.log(palindrome("hannah")); // Debería imprimir true
// Agrega más llamadas a palindrome aquí...
