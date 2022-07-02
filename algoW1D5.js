var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

// re-assigning fruit2 to match value of fruit 1
// then log it with a string inbetween
// apples and apples

////////////////////////////////
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this temporary value;gives us somewhere to hold the value 
fruit1 = fruit2; //apples overwritten as fruit2:oranges
fruit2 = temp; //oranges equals temp value:apple
    
console.log(fruit2 + " and " + fruit1); //oranges and apples
///results in values F1 & F2 being switched

//////////////////////////////
var start = 0;
var end = 12;
    
while(start < end) { //until 0 reaches 11
    console.log("start: " + start + ", end: " + end); //each value of BUT WE WILL COUNT BY 2's est in next line
    start += 2;  //counting by 0,2,4,6
    end -= 2; //12,10,8,6,
    //doesn't get to logging 6 and 6
}

///////////////////

// Reverse an Array

const arr = ["a", "b", "c", "d", "e"];
const newarr = [];
function reverse(arr){
    for(var i = arr.length-1; i >= 0; i--){ 
    // console.log(i)
    //goes through array backwards by subtracting one
        newarr.push(arr[i]);
    }
    console.log(newarr)
}
reverse(arr);

