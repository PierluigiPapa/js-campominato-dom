//Costante per stabilire il livello di difficoltà
const levelHtml = document.getElementById ('level')
//Costante per attivare il gioco attraverso il bottone play
const buttonHmtl = document.querySelector ('.play')
//Costante per attivare la griglia
const grigliaHtml = document.getElementById('grid')

//Costante per generare il punteggio, tramite un messaggio, quando si clicca sulla bomba
const message = document.querySelector('.message')
//Costante per stabilire il numero delle bombe nel gioco
const bombNum = 16;


//Creo un metodo per cliccare sul pulsante play per iniziare il gioco 
buttonHmtl.addEventListener('click', inizioGioco);

//Funzione per avviare il gioco
function inizioGioco() {
    message.innerHTML = '';
    //Variabile per definire il punteggio iniziale
    let score = 0;
    
    grigliaHtml.innerHTML = '';
    //SE clicco su easy, uscirà una griglia da 100
    if(level.value == 'easy') {
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement("div");
            box.classList.add("box-easy");
            box.classList.add("box");
            grigliaHtml.append(box);
            box.innerHTML = i;

            totBox = 100;
            box.addEventListener('click', selectedSquareChangeColor);
        }
    //ALTRIMENTI clicco su medium, per uscire una griglia da 81
    }else if (level.value == 'medium') {
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box-medium");
            box.classList.add("box");
            
            grigliaHtml.append(box);
            box.innerHTML = i;

            totBox= 81;
            box.addEventListener('click', selectedSquareChangeColor);
        }
    //ALTRIMENTI clicco su hard, per uscire una griglia da 49
    }else if (level.value == 'hard') {
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box-hard");
            box.classList.add("box");
            grigliaHtml.append(box);
            box.innerHTML = i;

            totBox= 49;
            box.addEventListener('click', selectedSquareChangeColor);
        }
    }

    //Costante per generare il numero random dove è presente la bomba
const arrRandomBombs = [];
//Ciclo per generare numeri random
for (i = 0; i < bombNum; i++) {
    let randomNum;

    do{
        randomNum = getRandomNum(1, totBox);
    }
    while(arrRandomBombs.includes(randomNum)){
    arrRandomBombs.push(randomNum)

    }
}
console.log(arrRandomBombs.sort()) 


}