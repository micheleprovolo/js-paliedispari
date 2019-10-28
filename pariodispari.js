// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var pariOdispari = prompt("Scegli pari o dispari");
console.log("L'utente ha scelto: " + pariOdispari);

var userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Numero scelto dall'utente: " + userNum);

var cpuNum = getRandomIntInclusive (1,5);
console.log("Numero scelto dal computer: " + cpuNum);

var somma = userNum + cpuNum;
console.log("La somma è: " + somma);


// blocco funzioni

function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

var finale = result();

function result() {
        
        if((somma % 2 === 0) && (pariOdispari == "pari")) {
                console.log("Il risultato è pari e ha vinto l'utente");

        } else if ((somma % 2 === 0) && (pariOdispari == "dispari")) {
                console.log("Il risultato è pari e ha vinto il computer");
                
        } else if ((somma % 2 !== 0) && (pariOdispari == "pari")){
                console.log("Il risultato è dispari e ha vinto il computer");

        } else if ((somma % 2 !== 0) && (pariOdispari == "dispari")) {
                console.log("Il risultato è dispari e ha vinto l'utente");
        }
    }
