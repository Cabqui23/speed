function stringIncludes(substring, string) {
    return string.includes(substring);
  }
  console.log(stringIncludes("he", "Hello")); // Debería imprimir false
console.log(stringIncludes("he", "hello world")); // Debería imprimir true