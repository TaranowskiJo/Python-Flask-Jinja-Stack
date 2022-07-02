//ARRAY CHALLENGES//

//1. ALWAYS HUNGRY //
//write a function that, when given an array, console.logs("yummy") when the
    //array value is = "food"
    //if food is not present in the entire array, console.log("I'm Hungry")
function alwaysHungry(arr) {
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] === "food"){
            console.log('yummy')
            count++
        }
    }
    if(count === 0) {
        console.log("I'm Hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//2. HIGH PASS FILTER //
//return a new array w/ only values larger than cutoff from the array 
function highPass(arr, cutoff) { //2 parameters arr and and a value = cutoff
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3.BETTER THAN AVERAGE//
//given an array, count how many numbers are larger than avg
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0; //2nd if statement 
    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    avg = sum/arr.length
    for(var y = 0; y<arr.length;y++){
        if (arr[y]>avg){
            count += 1;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



//4.ARRAY REVERSE//
//write a function to reverse array values and return them 
//in the same array? could make a temp array for holding then set equal ?
var temp = [];
function reverse(arr) {
    for(var i = arr.length-1; i >= 0; i--){ 
        temp.push(arr[i]); //push arr values into temp array
    }
    arr = temp //sets arr equal to temp array 
    return arr; //returs original array with new values 
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//5. FIBONACCI ARRAY//
// n -1 because we already have those first two values counted within our n total array values
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 0; i<n-2 ; i++){
        var sum = (fibArr[i] + fibArr[i+1])
        fibArr.push(sum)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


