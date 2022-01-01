function comparaNumeros(num1, num2) {
    let primeirafrase= primeiraParte(num1, num2);
    let segundafrase = segundaParte(num1, num2);
    let terceiraParte= divisao(num1, num2);

    return `${primeirafrase} ${segundafrase} ${terceiraParte}`;
}


function primeiraParte(num1, num2){
    let primeiraParte= `Os números digitados ${num1} e ${num2}`;
    let simNao = ''

    if( num1 != num2){
        simNao = 'não';

        return`${primeiraParte} ${simNao} são iguais.`;
    }
}

function segundaParte(num1, num2){
    const soma = num1+ num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if(soma > 10){
        comparaDez = 'maior'
    }
    if (soma > 20){
        comparaVinte = 'maior'
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function divisao(num1, num2){
    const terceiraParte = `a divisão por 2 de cada número resulta em: `;
    let metade1 = num1/2;
    let metade2 = num2/2;

    return `${terceiraParte} ${metade1} e ${metade2} respectivamente`;
}
console.log(comparaNumeros(5, 10));

