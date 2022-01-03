function calculadora(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos`
}
const maria={
    nome:'Maria',
    idade: 30
}
const Joice={
    nome:'Joice',
    idade: 30
}

console.log(calculadora.call(maria, 20))
console.log(calculadora.apply(Joice, [2]))