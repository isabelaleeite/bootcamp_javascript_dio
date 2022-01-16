//solução 1

function verificaPalindromo(string) {
  if (!string) return;

  return string.split("").reserve().join("") === string;
}

console.log(verificaPalindromo("gato"));