//Recupero gli elementi del DOM
const memorizeSection = document.getElementById('memorize-section');
const resultTimer = document.getElementById('timer');
const resultRandomNumbers = document.getElementById('numbers');
const inputSection = document.getElementById('input-section');

let counter = 30;

const randomNumbers = [];

//Ogni secondo si aggiorna il timer
const interval = setInterval(() => {
    resultTimer.innerText = counter--;
}, 1000);


//Dopo 30 secondi lo stoppo
setTimeout( () => {
    clearInterval(interval);

    //Faccio sparire la sezione di memorizzazzione
    memorizeSection.className = 'display-none'

    //Compare la sezione di input
    inputSection.classList.remove('display-none');

}, 30000);

//Genero 5 numeri casuali diversi e li inserisco in pagina
while(randomNumbers.length < 5){
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(num);

    if(!randomNumbers.includes(num)){
        randomNumbers.push(num);

        const element = document.createElement('li');
        element.innerText = num;
        resultRandomNumbers.appendChild(element);
    }
}
