///////DECLARE GLOBAL VARIABLES////////
//==================================//
var genres = ["rock", "instromental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", "rap", "kareoke"]; //....... this will become a potential matrix when adding music and images?
    //make an object instead of array to call forth images or sounds but later on
    //will have to alter exsisting 'call-forth's when that happens
var pastGenres = [] ;
var round = 0;
var correct =[];
var incorrect = [];
var blanks = [];
var guessCount = 17;
var wins = 0;

//////FUNCTIONS///////////
//======================//
 function roundCataloging(){
    for (i = 0; i < genres.length; ){
        var roundWords = genres[Math.floor(Math.random()*genres.length)];
        var wordIndex = pastGenres.indexOf(roundWords);
        if ( wordIndex > -1){
            continue;
        }else{
            pastGenres.push(roundWords);
            i++;
        }
    }
}                                 

function roundWord(word){
    var letters = word.split("");
    for(i = 0; i < letters.length; i++){
        blanks.push("_ ");
    }
    document.getElementById('display-word').innerHTML = blanks;
    letterPlay(letters); 
} 

function letterPlay(letters){
    document.onkeyup = function (event){
        var found = false;
        var guess = event.key.toUpperCase();
        var wordDisplay = ("");
        for(i = 0; i < letters.length; i++){
            if(guess === letters[i].toUpperCase()){
                wordDisplay += letters[i];
                found = true;
                inWord = true;
            }else if(correct.indexOf(letters[i].toUpperCase()) > -1){
                wordDisplay += letters[i];
            }else if(incorrect.indexOf(guess.toUpperCase()) > -1){
                return;
            }else{
                wordDisplay += "_ ";
                continue;
            }
        }
        guessCount--;
        if (found){
            correct.push(guess);
        }else{
             incorrect.push(guess);
        }
        document.getElementById('guess-number').innerHTML = guessCount;
        document.getElementById('display-word').innerHTML = wordDisplay;
        document.getElementById('rem-letters').innerHTML = incorrect;
        document.getElementById('wins').innerHTML = wins;
        console.log(incorrect); ///////==========================find a way not to replicate previous incorrect answers
        if (guessCount < 1){
            newRound();
        }else if(wordDisplay.indexOf("_ ") < 0){
            wins++;
            newRound();
        }
    }
}

function newRound(){
    guessCount = 17;
    incorrect = [];
    correct = [];
    if (round < pastGenres.length){
        var word = pastGenres[round];
        roundWord(word);

        round++;
    }
    else{
        document.write("Game Over");
    }
}

///////// ACTIONS // CALLING /// EVENT LISTENERS //////
///===================================================//
document.onkeyup = function(event){
    roundCataloging();
    newRound();
}

