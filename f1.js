
function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        
        soma += array[i];
    }
    console.log(soma) 
};

const MEU_ARRAY = [30, 50, 70, 200]
console.log(somaArray(MEU_ARRAY))