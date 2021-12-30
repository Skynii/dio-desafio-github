//Criando botão de fechar
var myList= document.getElementsByTagName('LI');
var i;

for (i =0; i< myList.length; i++){
    var span =document.createElement("SPAN");
    var txt= document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//Faz botão de Close excluir Lista

var close= document.getElementsByClassName("close");
var i;

for(i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div= this.parentElement;
        div.style.display = "none";
    }
}

//Ao concuir tarefa add um checked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Adiciona uma nova tarefa no ultimo da fila 
function addTask(){
    var li = document.createElement("li");
    var inputValue= document.getElementById('task').value;var t= document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === ''){
        alert("Você precisa escrever alguma tarefa");
    } else{
        document.getElementById("myList").appendChild(li);
    }document.getElementById('task').value = "";

    var span = document.createElement("span");
    var txt1= document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt1);
    li.appendChild(span);

    for(i =0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }
}