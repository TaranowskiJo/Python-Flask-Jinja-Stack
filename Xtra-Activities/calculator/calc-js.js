//planning...
    //4 different functions
    //onclick
    //add,sub,mult,div
    //affects display's innerText

//establish variables for holding
var previous = ""
var current = ""
operator = ""
var disp = document.querySelector("#display")

//buttons num and dec
function press(element){
    // if(previous == ""){
    current += element
    disp.innerText = current
    // parseInt(current)
    console.log("current value is: " + current) //Testing
    // else if (previous !== "") {
    //     current = ""
    // }
}

//set operator 
function setOP(op){
    previous = current
    current = ""
    // parseInt(previous)
    console.log("previous value is: " + previous) //Testing
    console.log(op) //Testing
    // if (previous !== "") {
    //     current = ""
    // } 
    if (op == '+'){
        disp.innerText = previous 
        operator = op  
    }
    if(op == '-' ){
        disp.innerText = current
        operator = op
    }
    if(op == '/' ){
        disp.innerText = current
        operator = op
    }
    if(op == '*' ){
        disp.innerText = current
        operator = op
    }
}

//clear calculator
function clr(){
    current = ""
    disp.innerText = 0
}

//do the math
function calculate(){
    if(operator == '+'){ //add
        console.log("operator is: ", operator) //Testing
        console.log("previous value is: " + previous)//Testing
        console.log("current value is: " + current)//Testing
        
        current = parseInt(current) + parseInt(previous)
        console.log('new current', current)//Testing
        display.innerText = current}
    
    else if(operator == '-'){ //subtract
        console.log("operator is: ", operator) //Testing
        console.log("previous value is: " + previous)//Testing
        console.log("current value is: " + current)//Testing
        
        current = parseInt(current) - parseInt(previous)
        console.log('new current', current)//Testing
        display.innerText = current}
    
    else if(operator == '/'){ //div
        console.log("operator is: ", operator) //Testing
        console.log("previous value is: " + previous)//Testing
        console.log("current value is: " + current)//Testing
        
        current = parseInt(current)/parseInt(previous)
        console.log('new current', current)//Testing
        display.innerText = current}
    
    else if(operator == '*'){ //mult
        console.log("operator is: ", operator) //Testing
        console.log("previous value is: " + previous)//Testing
        console.log("current value is: " + current)//Testing
        
        current = parseInt(current) * parseInt(previous)
        console.log('new current', current)//Testing
        display.innerText = current}
    }
