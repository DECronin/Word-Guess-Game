///////DECLARE GLOBAL VARIABLES////////
//==================================//
var genres = ["rock", "instromental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", "rap", "kareoke"]; //....... this will become a potential matrix when adding music and images?
    //make an object instead of array to call forth images or sounds but later
    //will have to alter exsisting 'call-forth's when that happens
var pastGenres = [] ;
var round = 0;
var correct =[];
var incorrect = [];
var blanks = [];
var guessCount = 17;

//////FUNCTIONS///////////
//======================//
 function roundCataloging(){
    for (i = 0; i < genres.length; ){
        var roundWords = genres[Math.floor(Math.random()*genres.length)];
        //DO NOT TURN INTO FUNCTION UNLESS YOU REARANGE EXITS FOR LOOP
        var wordIndex = pastGenres.indexOf(roundWords);
        if ( wordIndex > -1){
            continue;
        }else{
            pastGenres.push(roundWords);
            i++;
        }
    } // var ___ = functionResult(); ==== var ___ is reasigned as the value returned from function instead of it being left alone
}                                   //exit loop being all rounds have been played

function roundWord(word){
    console.log(word);
    var letters = word.split("");
    console.log(letters);
    for(i = 0; i < letters.length; i++){
        blanks.push("_ ");
    }
    
    document.getElementById('display-word').innerHTML = blanks;
    console.log(blanks);
    letterPlay(letters); 
    //document.getElementById('rem-letters').innerHtml = incorrect;
    
} 

function letterPlay(letters){
    document.onkeyup = function (event){
        var found = false;
        var guess = event.key.toUpperCase();
        console.log(guess);
        var wordDisplay = ("");
        for(i = 0; i < letters.length; i++){
            if(guess === letters[i].toUpperCase()){
                wordDisplay += letters[i];
                found = true;
            }else if(correct.indexOf(letters[i].toUpperCase()) > -1){
                wordDisplay += letters[i];
            }else if(incorrect.indexOf(letters[i].toUpperCase()) > -1){
                continue;
            }else{
                wordDisplay += "_ ";
                continue;
            }
        }
        if (found){
            correct.push(guess);
        }else{
             incorrect.push(guess);
             guessCount--;

        }
        console.log(wordDisplay);
        console.log("remaining guesses: " + guessCount);
        console.log("incorrects: " + incorrect)
        document.getElementById('display-word').innerHTML = wordDisplay;
        if (guessCount < 1){
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

///////// ACTIONS // CALLING /// EVENT LISTENERS? //////
///===================================================//
document.onkeyup = function(event){
    roundCataloging(); 
    console.log("=================================================================================");
    newRound();
    console.log(pastGenres);

}

//////// NOTES /////
//================//
// console.log(round);
            // console.log(currentWord);
            // console.log(pastGenres);
            // console.log("------------------")  
// var guess = string.fromCharCode(evemt.keycode).toUpperCase();
//to capture guess into loop to compare and later array for word or incorrect guesses
// functionWins(){ ----arrayName.push() allows to add value to an egsisting array / .unshift adds items to begining of array
//functionCompare()?
//.pop() and .shift() remove respectively last and first items from array
//The splice() method allows us to add/remove items to/from an array, and to specifically indicate the index of the elements that have to be added /removed
// var (name) = new funcName() //chages variable value to that returned or recieved from function?
//document.getElementById('tag-id').innerHTML = insert-variable;

// function Wins(wins, loses, guessNumber, rounds, genres){
//     var wins = 0;
//     var loses = 0;
//     while(rounds <= genres.length){
//         guessNumber = new function Guesses(guessNumber);
//         if (guessNumber === 0){
//             loses++;
//         }else {
//             wins++;
//         }
//     } 
// }

// function Guesses(currentWord, correct, incorrect, guessNumber){
//     var guessesNumber = 17;
//     while (correct < currentWord.length or incorrect < guessNumber){
//         //function RoundWord();
//         //^ loop or function gameplay of letters, spaces/blanks, displaying filled blanks or wrong guesses
//         // guessNumber--;
//         // if (){
//         //   correct++;
//        // } else{
//         //    incorrect++;
//        //}
//        }
//     }
//     return guessNumber;
// }


