const DATA = new Date();

const DIA = String(DATA.getDate());
const MES = String(DATA.getMonth());
const ANO = DATA.getFullYear();

const FORMATO = `${DIA}/${MES}/${ANO}`;
console.log(FORMATO);