///////DECLARE GLOBAL VARIABLES////////
//==================================//
var genres = ["indie", "rock", "instrumental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", 
"rap", "kareoke", "hymns", "opera", "dubstep", "gospel", "country", "acoustic", "lullabies", "jingles", "holliday", "bluegrass",
"symphony", "steampunk", "latin", "bubblegum", "childrens", "alternative", "reggae", "funk", "bop", "metal", "electronic", "dance", 
"ambiant", "burlesque", "skaa", "tribal", "contemporary", "renaissance", "yodeling", "grunge", "house"]; //....... this will become a potential matrix when adding music and images?
    //make an object instead of array to call forth images or sounds but later on
    //will have to alter exsisting 'call-forth's when that happens
var pastGenres = [] ;
var round = 0;
var correct =[];
var incorrect = [];
var guessCount = 17;
var wins = 0;
var prevWord = ('');
var key = ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
    var blanks = ("");
    correct =[];
    incorrect = [];
    var letters = word.split("");
    for(i = 0; i < letters.length; i++){
        blanks += "_ ";
    }
    guessCount = 17;
    document.getElementById('previous-word').innerHTML = prevWord;
    document.getElementById('guess-number').innerHTML = guessCount;
    document.getElementById('display-word').innerHTML = blanks;
    document.getElementById('rem-letters').innerHTML = incorrect;
    letterPlay(letters); 
} 

function letterPlay(letters){
    document.onkeyup = function (event){
        var found = false;
        var guess = event.key.toUpperCase();
        var wordDisplay = ("");
        for(i = 0; i < letters.length; i++){
            if (key.indexOf(guess) > -1){
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
            }else{
                return;
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
        if (guessCount < 1){
            newRound();
        }else if(wordDisplay.indexOf("_ ") < 0){
            wins++;
            newRound();
        }
    }
}

function newRound(){
    
    incorrect = [];
    correct = [];
    if (round < pastGenres.length){
        var word = pastGenres[round];
        roundWord(word);
        document.getElementById('wins').innerHTML = wins;
        prevWord = word;
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

