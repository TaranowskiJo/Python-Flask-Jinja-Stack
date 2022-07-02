var theDojo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var dojoDiv = document.querySelector("#the-dojo");
// Creates the rows of buttons for this game

function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"
        oncontextmenu = "mark(this); return false"</button>`
        }
    }
    for (var ninja = 0; ninja < 10; ninja++) {
        x = Math.floor(Math.random() * 9);
        y = Math.floor(Math.random() * 9);
        if (theDojo[x][y] === 9) {
            ninja--;
        }
        if (theDojo[x][y] === 0) {
            theDojo[x][y] = 9; 
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

var nope = document.querySelector("#restart");
var popUP = document.querySelector("#message");
var juke = 0
var score = document.querySelector("#score")
var num = 0
function howMany(i, j, element) {
    var ninjas = 0; //starting count of ninjas nearby
    //what to do if not a ninja
    if(theDojo[i][j] === 0){
        num += 20;
        score.innerText = `Score: ${num}`
    //   ninjas += theDojo[i][j];
        if (j !== 9){
            if(theDojo[i][j+1] == 9) {
                ninjas++; } }
        if (j !== 0){
            if(theDojo[i][j-1] == 9) {
                ninjas++; }}
        if(i !== 0){
            if(theDojo[i-1][j] == 9) {
            ninjas++;}
            if(theDojo[i-1][j-1] == 9) {
                ninjas++;}
            if(theDojo[i-1][j+1] == 9) {
                ninjas++; }}
        if (i !== 9){
            if(theDojo[i+1][j-1] == 9) {
                ninjas++;}
            if(theDojo[i+1][j+1] == 9) {
                ninjas++; }   
            if(theDojo[i+1][j] == 9) {
                ninjas++;}}
        element.innerText = ninjas;
        element.style.backgroundColor = "lightgrey"; 
    //what to do if ninja found
    }  else if(theDojo[i][j] == 9){
        score.innerText = "Score: 0"
        popUP.style.visibility = "visible";
        // console.log(canPlay)
        element.innerText = "X"
        element.style.backgroundColor = "red"; 
    //setting restart button to appear only once
        if( juke < 1){
        nope.innerHTML += (`<button onclick="location.reload()">restart</button>`)
        juke++;
        }
    }   
}

function mark(element) {
    element.style.background = "lightblue"
}
//   alert("TODO - determine how many ninjas are hiding in adjacent squares");

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
// adds the rows of buttons into <div id="the-dojo"></div>

dojoDiv.innerHTML = render(theDojo);
console.table(theDojo)