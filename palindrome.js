//Verifico attraverso una funzione se la parola è palindroma

var userWord = prompt("inserisci una parola");

var result = palindrome(userWord);

function palindrome(userWord){

        if( userWord === userWord.split("").reverse().join("")){
                console.log(userWord + " è palindroma");
                
        }else{
                console.log(userWord + " non è palindroma");
        }
}