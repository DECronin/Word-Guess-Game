// "click any key to start"
 onkeypress = function Main(genres, pastGenres, wordIndex, currentWord){
    var genres = ["rock", "instromental", "jazz", "blues", "screamo", "classical", "oldies", "disney", "pop","folk", "rap", "kareoke"] //....... this will become a potential matrix when adding music and images?
    //^//mayby use matrix loop here for images and music
    var pastGenres = []   
    for (round = 0; round < genres.length; ) {
        for (i = 0; i < round + 1; i++){
            var currentWord = genres[Math.floor(Math.random()*genres.length)];
            var wordIndex = pastGenres.indexOf(currentWord);
            if ( wordIndex > -1){
                continue;
            }else{
                round++;
                pastGenres.push(currentWord);
                console.log(round);
                console.log(currentWord);
                console.log(pastGenres);
                console.log("------------------")  
            }
        }
    } 
// console.log(currentWord);
// console.log(genres);
// console.log(wordIndex);
}
//exit loop being all rounds have been played
var wins = 0;
var guessesNumber = 17;
//var guess = string.fromCharCode(evemt.keycode).toUpperCase();
//to capture guess into loop to compare and later array for word or incorrect guesses


// functionWins(){ ----arrayName.push() allows to add value to an egsisting array / .unshift adds items to begining of array
// } loop 2

// functionWord(){
// // word chosing from array 
// //
// //loop to ensure not already used
// } loops 3, 4 and 5?
//functionDisplay()?
//functionCompare()?

//.pop() and .shift() remove respectively last and first items from array
//The splice() method allows us to add/remove items to/from an array, and to specifically indicate the index of the elements that have to be added /removed
