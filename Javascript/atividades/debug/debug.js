//Lançar erros

function validaArray( arr, num){
    try{
    if(!arr && !num) 
        throw new ReferenceError("Envie os parametros");

    if(typeof arr !=='object') 
        throw new TypeError("Array precisa ser do tipo objeto");

    if(typeof num!== 'number') 
        throw new TypeError("Num precisa ser um número");

    if (arr.length !== num) 
        throw new RangeError('Tamanho do array inválido!')

    return arr;
    }
    catch(e) {
        //filtro e tratamento dos erros
        if( e instanceof ReferenceError){
            console.log("Este erro é um reference error")
            console.log(e.message)
        }else if ( e instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(e.message)
        }else if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.message);
        } else{
            console.log("Tipo de erro não esperado: " + e)
        }
}
}

console.log(validaArray());
console.log(validaArray("askskka"));
console.log(validaArray([],'g'));
console.log(validaArray([],5));
console.log(validaArray([5, 5], 2));
