// verificação de palindromo

function verificarPalindromo(string){
    if (!string) return "String Inexistente"

    //Separa().Reverte().Junta()
    return string.split("").reverse().join("") === string;
}


(verificarPalindromo('asa'));
(verificarPalindromo('loja'));
(verificarPalindromo('ama'));
(verificarPalindromo(''));

//Solução 2

function verificarPalindromo2(string){
    if (!string) return "String Inexistente";

    if(!string.length)return;

    for(var i = 0; i<string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return console.log(false);
        }
    }
    return console.log(true);
}

verificarPalindromo2('casa')
verificarPalindromo2('asa')
verificarPalindromo2('dada')