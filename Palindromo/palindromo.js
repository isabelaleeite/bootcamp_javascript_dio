//solução 1

/* function verificaPalindromo(string) {
  if (!string) return "string inexistente";

  return string.split("").reserve().join("") === string;
}

console.log(verificaPalindromo("gato")); */

function verificaPalindromo2(string) {
  if (!string) return "string inexistente"; 

// colocar -1 -i , porque o length conta 1,2,3 e o indice começa em 0,1,2

  for(let i =0; i < string.length / 2 ; i++) {
    if(string[i] !== string[string.length -1 - i]){
    return false;
    }
  }

  return true;

}