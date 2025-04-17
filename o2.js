const CARRO = {
    marca: "Ford",
    modelo:"Raptor",
    ano: 2022,

    sobre: function() {

        return `Carro:${this.marca}  Modelo:${this.modelo} Ano: ${this.ano}`
    }
}

console.log(CARRO.sobre())