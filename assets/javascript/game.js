// "click any key to start"
 onkeypress = function Main(genres, pastGenres, wordIndex, currentWord){
    var genres = ["rock", "instromental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", "rap", "kareoke"] //....... this will become a potential matrix when adding music and images?
    //^//mayby use matrix loop here for images and music
    var pastGenres = [] 
    for (round = 0; round < genres.length;) {
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
                break;
            }
        }    
    } 
}                                   //exit loop being all rounds have been played

            // console.log(round);
            // console.log(currentWord);
            // console.log(pastGenres);
            // console.log("------------------")  
// var guess = string.fromCharCode(evemt.keycode).toUpperCase();
//to capture guess into loop to compare and later array for word or incorrect guesses
// functionWins(){ ----arrayName.push() allows to add value to an egsisting array / .unshift adds items to begining of array
// // word chosing from array 
// //loop to ensure not already used
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
//     while (correct < currentWord.length && incorrect < guessNumber){
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

function RoundWord(currentWord, letters){
    console.log(currentWord)
    var letters = currentWord.split("");
    var blanks = ("");
    for(i = 0; i < letters.length; i++){
        blanks += "_ ";
    }
    document.getElementById('display-word').innerHTML = blanks;

}