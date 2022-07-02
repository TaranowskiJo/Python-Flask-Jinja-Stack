
//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK

var agreement = document.querySelector("#cookie-box") //targets box as a whole element

function makeDisappear() {
    agreement.style.display= "none";
}
//sets css style display to none  when accept clicked
//Makes the cookie acceptance box disappear

//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK//COOKIE CLICK


//DEGREE TYPE////DEGREE TYPE////DEGREE TYPE////DEGREE TYPE//
//DEGREE TYPE////DEGREE TYPE////DEGREE TYPE////DEGREE TYPE//

//sets alert when type changed
function changeDegreeType(weather) {
    alert("You have selected: " + weather.value);
}


// change between C and F //// change between C and F //// change between C and F //
// change between C and F// change between C and F //// change between C and F //
// change between C and F// change between C and F //// change between C and F //
// change between C and F// change between C and F //// change between C and F //

var arr = [document.querySelector("#tempNumber0"),document.querySelector("#tempNumber1"),
document.querySelector("#tempNumber2"),document.querySelector("#tempNumber3"),
document.querySelector("#tempNumber4"),document.querySelector("#tempNumber5"),
document.querySelector("#tempNumber6"),document.querySelector("#tempNumber7")]
var ele = 0
function changeDegreeType(element){
    console.log('hi')
    var EV = (element.value);
    console.log(EV)  //EV is current C or F
        if(EV == "°F") {
            for(var i = 0; i < arr.length; i ++) {
                console.log(arr[i].innerText) //now we are accessing the values of  arr 
                var pI = parseInt(arr[i].innerText) //extracts num from array temp values
                // console.log(pI)
                var changeToC = (pI-32)*5/9 //doin the math // subtract 32, multiply by 5, divide by 9; F -> C
                console.log(changeToC)
                arr[i].innerText = Math.round(changeToC) //rounding UP
                }
            }
            else if(EV == "°C") {
                for(var i = 0; i < arr.length; i ++) {
                    console.log(arr[i].innerText) //now we are accessing the values of  arr 
                    var pI = parseInt(arr[i].innerText)
                    // console.log(pI)
                    var changeToF = (pI/5)*9 + 32; //doin the math    // divide by 5, multiply by 9, add 32 ; C -> F
                    //console.log(changeToF)
                    arr[i].innerText = Math.round(changeToF) //rounding UP
                    }
                }
    }



