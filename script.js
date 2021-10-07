/*Programmering för UX-produktion, Rebecka Näsström, HT2021*/

/*Runs the function once on load to show a card*/
randomNote();

/*Variable that saves information about the last shown note, so it can be used to hide it when next note is loaded.*/
var lastShownNote;

/*Function to randomise a note on button click*/
function randomNote(){
    var allNotes = document.getElementsByClassName("random"); /*Gets an array of all the notes with class random and stores it in allNotes*/
    var oneNote = allNotes[Math.floor(Math.random()*allNotes.length)]; /*Randomly picks one note from the array and stores it in oneNote*/

    /*Changes display property of last shown and upcoming note to hide previous and show next on button click*/
    if (lastShownNote != null){
        lastShownNote.style.display = "none";
    }
    oneNote.style.display = "flex";  

    lastShownNote = oneNote;
}

