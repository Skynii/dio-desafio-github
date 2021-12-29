let currentNumber= document.getElementById('currentNumber');
let count= 0;
const change = document.getElementById('test');
function decrement(){
    count --;
    currentNumber.innerHTML = count ;
    
}

function increment(){
    count ++;
    currentNumber.innerHTML = count;
}

