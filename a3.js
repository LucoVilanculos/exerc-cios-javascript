function somar(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        
        soma += array[i];
   
    };
    console.log(soma)     
};

const NUMEROS = [10, 50, 7, 200, 80, 1];
console.log(somar(NUMEROS))