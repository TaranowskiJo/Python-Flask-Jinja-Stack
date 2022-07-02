////USERNAME TOGGLE//////USERNAME TOGGLE//////USERNAME TOGGLE//
////USERNAME TOGGLE//////USERNAME TOGGLE//////USERNAME TOGGLE//
////USERNAME TOGGLE//////USERNAME TOGGLE//////USERNAME TOGGLE//

var username = document.querySelector("#name-1");

var num = 0; //can switch between a variable's value  to select array value
var users = ["Jane Doe","Not Jane Doe"]; //the two options of users
function changeUser() {
    console.log('running')
    if(num == 0){
        console.log('hi');
        num++;
        username.innerHTML = users[num];
    }
    else if(num == 1){
        console.log('r u hacking?')
        num--
        username.innerHTML = users[num]
    }
}
////END USERNAME TOGGLE//////END USERNAME TOGGLE//
////END USERNAME TOGGLE//////END USERNAME TOGGLE//
////END USERNAME TOGGLE//////END USERNAME TOGGLE//

///APPROVE OR DENY///////APPROVE OR DENY///////APPROVE OR DENY////
///APPROVE OR DENY///////APPROVE OR DENY///////APPROVE OR DENY////
///APPROVE OR DENY///////APPROVE OR DENY///////APPROVE OR DENY////
// I think i need to have different functions for different buttons
// also div the individual requests out if they aren't already 
//     .disappear() or soemthing like that? with a green/red  color to emphasize 
// BONUS make the connections req number at the top change (inner.text)
//     ALSO then increase YOUR CONNECTIONS inner.text
//  so both remove req then have sep innertext targets, add CSS color after maybe?


var reqNumber = document.querySelector("#connectionRequests") //edit header4
var conNumber = document.querySelector("#yourConnections") //editing header5
var reqBoxOne = document.querySelector("#reqOne")
var reqBoxTwo = document.querySelector("#reqTwo")
//VARIABLES ESTABLISHED FOR FUNCTION reqCHOOSE
var count = 2;
var connecty = 345;
function reqChoose(num){
    if(num == 0){
        count-- 
        connecty++
        // console.log("hi")
        reqBoxOne.style.display = "none" //removes req card
        reqNumber.innerText = count + " Connection Requests" // changes #connection req text
        conNumber.innerText = connecty + " Your Connections"// changes #connectionss text
    }
    else if(num == 1){
        count--
        connecty--
        // console.log("hi2")
        reqBoxOne.style.display = "none" 
        reqNumber.innerText = count + " Connection Requests"
        conNumber.innerText = connecty + " Your Connections"
        }
    else if(num == 3){
        count--
        connecty++
        // console.log("hi")
        reqBoxTwo.style.display = "none"
        reqNumber.innerText = count + " Connection Requests"
        conNumber.innerText = connecty + " Your Connections" }
    else if(num == 4){
        count--
        connecty--
        // console.log("hi2")
        reqBoxTwo.style.display = "none"
        reqNumber.innerText = count + " Connection Requests" 
        conNumber.innerText = connecty + " Your Connections"}
        
}


//input dependent on which req buttons are pressed 













////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////SCRAPPED CODE////////////////////////////
////////////////////////////////////////////////////////
//FIRST ATTEMPT AT THE CODE DIDN"T QUITE RUN HOW I WANTED

// function changeUser() {
//     console.log('hi')
//     if(username.innerText = "Jane Doe"){
//     username.innerText = "Not Jane Doe" }

/////////////////////////////////////////////////