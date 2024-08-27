//Recupero gli elementi del DOM
const memorizeSection = document.getElementById('memorize-section');
const resultTimer = document.getElementById('timer');
const resultRandomNumbers = document.getElementById('numbers');
const inputSection = document.getElementById('input-section');
const form = document.querySelector('form');
const resultInputNumbers = document.querySelectorAll('input');
const button  = document.querySelector('button');

let counter = 30;
const maxNumbers = 5;
const randomNumbers = [];

//Ogni secondo si aggiorna il timer
const interval = setInterval(() => {
    resultTimer.innerText = counter--;
}, 1000);


//Dopo 30 secondi lo stoppo
setTimeout(() => {
    clearInterval(interval);

    //Faccio sparire la sezione di memorizzazzione
    memorizeSection.className = 'display-none'

    //Compare la sezione di input
    inputSection.classList.remove('display-none');

}, 30000);

//Genero 5 numeri casuali diversi e li inserisco in pagina
while (randomNumbers.length < maxNumbers) {
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(num);

    if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);

        const element = document.createElement('li');
        element.innerText = num;
        resultRandomNumbers.appendChild(element);
    }
}

//Acquisisco i 5 numeri dal form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(randomNumbers);
    const matchedNumbers = [];
    const inputNumbers = [];

    for (let i = 0; i < maxNumbers; i++) {

        num = parseInt(resultInputNumbers[i].value);
        
        if(!inputNumbers.includes(num)){
            inputNumbers.push(num);
        }
        else{
            alert('Hai inserito un duplicato');
            return;
        }

        console.log(inputNumbers);

        console.log(num);
        if (randomNumbers.includes(num)) {
            matchedNumbers.push(num);
        }
    }

    const result = document.createElement('p');

    result.innerText = matchedNumbers.length != 0 ? 
    `Hai indovinato ${matchedNumbers.length} numeri: (${matchedNumbers})` 
    : `Non hai ricordato nessun numero`

    inputSection.appendChild(result);

})
