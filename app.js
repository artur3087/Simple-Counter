// SIMPLE COUNTER //

// ! Below I declare my variables ! //

let count = 0;


// ! Below I code functionality of program's buttons ! //

//Functionality of decrease button below//

document.getElementById("btnDecr").onclick = function() {
    count-=1;   // This is an interesting way of decreasing value of variable // There are other ways to do it, of course //
    // document.getElementById("count").innerHTML = count; 
    display ();

}

document.getElementById("btnIncr").onclick = function() {
    count+=1;
    // document.getElementById("count").innerHTML = count;
        display (); 
}

document.getElementById("btnReset").onclick = function() {
    count=0
    // document.getElementById("count").innerHTML = count;   
    display ();
}

// ! Below I code a function which is called to display the new value of variable 'count' //

function display () {
    document.getElementById("count").innerHTML = count;
}
