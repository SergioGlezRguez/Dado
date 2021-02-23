let historyOfThrows = [];
function RandomNumber(){
    let number = Math.ceil(Math.random() * 6);
    let dice = document.getElementById('dice');
    let number2 = Math.ceil(Math.random() * 6);
    let dice2 = document.getElementById('dice2');
    dice.textContent = `${number}`; 
    dice2.textContent = `${number2}`;
    let history = document.getElementById('history');
    let suma = number + number2;
    historyOfThrows.push(number +"+"+ number2 +"="+ suma);
    let historial = "";
    for(let count = 0; count < historyOfThrows.length; ++count){
        historial += historyOfThrows[count] + "</br>" ; //construccion de string para que el html lo entienda.
    } 
    history.innerHTML = `${historial}`; //innerhtml es para que traduzca las etiquetas html. 
}
let button = document.getElementById('button');
button.addEventListener('click', RandomNumber);
