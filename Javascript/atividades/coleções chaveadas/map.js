//Coleção Chaveada .map()

/*var dizer= new Map();
dizer.set("Cachorro", "au au");
dizer.set("Gato", "miau");
dizer.set("Galinha", "có có");
dizer.size;
dizer.get("raposa") //falta  valor, então seá falso
dizer.delete("Gato") //Deleta
dizer.set("Gato", "piu piu")

for(var [key, value] of dizer){
   // console.log(key + " faz " + value)
}



/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.*/

const getAdmins = (map) =>{
    
    let admin = [];  
    

    for(var [key, value] of membros){
        if(value ==="adm"){
            admin.push(key)
        }
        
    }
    return admin;

}
var membros = new Map();
membros.set("Carlos", "adm");
membros.set("Larisa", "user");
membros.set("Joana", "adm");
membros.set("Brunno", "user")

    console.log(getAdmins(membros) + ` é Admin`);