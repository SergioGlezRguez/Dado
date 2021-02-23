function RandomNumber(){
    let number = Math.ceil(Math.random() * 6);
    let dice = document.getElementById('dice');
    dice.textContent = `${number}`; 
}
let button = document.getElementById('button');
button.addEventListener('click', RandomNumber);
