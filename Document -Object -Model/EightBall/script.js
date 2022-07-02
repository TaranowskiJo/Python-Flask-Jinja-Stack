var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
var bar = document.querySelector("#question")
var output = document.querySelector("#answer")
function getAnswer() {
    console.log(output);
    output.innerText = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
    replace();
    bar.value = "";
    
    
}

//r
//on click we display a random message from our array 
//math.floor(math.random() * arr.length)?? round down
//id "answer" edit innertext to arr[i]


//replace jpg with gif onclick() -> change img source 
var boll = document.querySelector("#ball")
function replace() {
    console.log('hi')
    boll.src = "ball.gif"
    setTimeout(function () {boll.src = "ballStill.jpg"}, 1000)
}


