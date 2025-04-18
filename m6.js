// De graus para radianos

function grausParaRadiano(radiano) {
    return radiano * (Math.PI / 180);
};

let graus = 180;
const RESULTADO = grausParaRadiano(graus);

console.log(RESULTADO);

// Radianos para graus

function radianoParaGrau(graus) {
    return graus * (180 / Math.PI);
};

let radiano = Math.PI;
//let radiano = 3.141592653589793;
const SAIDA = radianoParaGrau(radiano);

console.log(SAIDA);