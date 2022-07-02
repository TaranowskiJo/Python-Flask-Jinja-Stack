var anothaOne = document.querySelector("#likes");
var anothaAnothaOne = document.querySelector("#likes2")
var anothaAnothaAnothaOne = document.querySelector("#likes3")

//END VARIABLES//
//END VARIABLES//
//END VARIABLES//

//BUTTON ONE////BUTTON ONE////BUTTON ONE////BUTTON ONE//
//BUTTON ONE////BUTTON ONE////BUTTON ONE////BUTTON ONE//
//BUTTON ONE////BUTTON ONE////BUTTON ONE////BUTTON ONE//

var count = 0;
function addLikes() {
    console.log('hi')
    count++; // we add 1 to count
    if(count == 1){
        anothaOne.innerText = count + " like";
    }
    else {
        anothaOne.innerText = count + " like(s)";
    }
}

//BUTTON 2 ////BUTTON 2 ////BUTTON 2 ////BUTTON 2 //
//BUTTON 2 ////BUTTON 2 ////BUTTON 2 ////BUTTON 2 //
//BUTTON 2 ////BUTTON 2 ////BUTTON 2 ////BUTTON 2 //
//BUTTON 2 ////BUTTON 2 ////BUTTON 2 ////BUTTON 2 //

var count = 0;
function addLikes2() {
    console.log('hi')
    count++; // we add 1 to count
        if(count == 1){
            anothaAnothaOne.innerText = count + " like";} 
        else {
                anothaAnothaOne.innerText = count + " like(s)";}
}


//BUTTON 3////BUTTON 3////BUTTON 3////BUTTON 3//
//BUTTON 3////BUTTON 3////BUTTON 3////BUTTON 3//
//BUTTON 3////BUTTON 3////BUTTON 3////BUTTON 3//

var count = 0;
    function addLikes3() {
        console.log('hi')
         count++; // we add 1 to count
        if(count == 1){
            anothaAnothaAnothaOne.innerText = count + " like";
                }
        else {
            anothaAnothaAnothaOne.innerText = count + " like(s)"; }
}              
