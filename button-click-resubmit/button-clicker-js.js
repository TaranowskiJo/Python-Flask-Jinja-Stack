

// This function to switch login/logout
function login(element) {
    if(element.innerText == "Login"){
    element.innerText = "Logout" }
    else if (element.innerText == "Logout") {
        element.innerText = "Login"
    }
}

function disappear(element){
    element.remove();
} 

/* how put back?? */




// var clicks = 0;
// function click(this){
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }



// the alert function isjust in the html!!!!