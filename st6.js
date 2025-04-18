let sobre = "Luco Vilanculos é um frontend";
let dividirString = sobre.split(" ");

//conta apenas as palavras depois de separardas pelo split 
const NUMERO_DE_PALAVRAS = dividirString.length;

//conta tudo no array até os espaços
const TOTAL_DE_ESPACOS_LETRAS = sobre.length;

console.log(NUMERO_DE_PALAVRAS);
console.log(TOTAL_DE_ESPACOS_LETRAS)