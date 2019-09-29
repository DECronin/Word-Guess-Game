///////DECLARE GLOBAL VARIABLES////////
//==================================//
var genres = ["rock", "instromental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", "rap", "kareoke"] //....... this will become a potential matrix when adding music and images?
    //make an object instead of array to call forth images or sounds but later
    //will have to alter exsisting 'call-forth's when that happens
var pastGenres = [] 
round = 0

//////FUNCTIONS///////////
//======================//
// "click any key to start"
 onkeypress = function Main(){
    if (round < genres.length){
        for (i = 0; i < round + 1; i++){
            var currentWord = genres[Math.floor(Math.random()*genres.length)];
            //DO NOT TURN INTO FUNCTION UNLESS YOU REARANGE EXITS FOR LOOP
            var wordIndex = pastGenres.indexOf(currentWord);
            if ( wordIndex > -1){
                continue;
            }else{
                round++;
                pastGenres.push(currentWord);
                RoundWord(currentWord); // move to inside Guesses // inside Wins // Link Wins here?
                break; //for debugging so that i'm only consoling with 1 word at a time
            }
        } // var ___ = functionResult(); ==== var ___ is reasigned as the value returned from function instead of it being left alone
    } 
    else{
        document.write("Game Over");
    }
}                                   //exit loop being all rounds have been played

function RoundWord(word){
    console.log(word)
    var letters = word.split("");
    var incorrect = [];
    var blanks = [];
    for(i = 0; i < letters.length; i++){
        blanks.push("_ ");
        document.onkeyup = function(event){
        document.getElementById('display-word').innerHTML = blanks;
        var guess = event.key.toUpperCase();
        letterPlay(blanks, incorrect, letters, event);
        //document.getElementById('rem-letters').innerHtml = incorrect;
        }
    }
} 

function letterPlay(blanks, incorrect, letters, guess, event){
    if (letters.includes(guess)){
        letterIndex = letters.indexOf(guess);
        return blanks
    }
    else{
        incorrect += guess;
    }
}

///////// ACTIONS // CALLING /// EVENT LISTENERS? //////
///===================================================//


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
