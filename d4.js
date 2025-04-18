const DATA = new Date();

const ADICIONAR_NOVA_DATA = new Date(DATA); 
ADICIONAR_NOVA_DATA.setDate(DATA.getDay() + 7);

console.log(ADICIONAR_NOVA_DATA);


