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

//Funzione per selezionare il numero
function selectedSquareChangeColor(){
    this.classList.add('box-selected-color');

    console.log(this.innerHTML)
}
//Funzione per avviare il gioco
function inizioGioco() {
    
    grigliaHtml.innerHTML = '';
    //SE clicco su easy, uscirà la griglia da 100 
    if(level.value == 'easy') {
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement("div");
            box.classList.add("box-easy");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }
    //SE clicco su medium, uscirà la griglia da 81
    }else if (level.value == 'medium') {
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box-medium");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }
    //Se clicco su hard, uscirà la griglia da 49
    }else if (level.value == 'hard') {
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box-hard");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }
    }
}