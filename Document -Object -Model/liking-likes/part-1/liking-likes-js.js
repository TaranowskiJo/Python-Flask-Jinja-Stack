var likeIt =  document.querySelector("#thumbs-up"); //dont forget "" here

var count = 0;
function likePost() {
    count++; // we add 1 to count
    if(count == 1){
        likeIt.innerText = count + "like";
    }
    else {
    likeIt.innerText = count + " like(s)"; //count and a string
    // console.log("hi?") remainders of troubleshooting 
    }
}