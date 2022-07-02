W1D4 Algos

var x = 5; //value for x so far
    
function setX(newValue) {
    x = newValue;       //just funcition 
}
    
console.log(x); //asking for original x val
setX(15); //CALL FUNCTION, now x is 15
console.log(x); log new x, 15

5,15




var x = 5; //our original value
    
function addToX(amount) {
    return x + amount;
    console.log("hello there"); 
    // Logs once function is called
}
    
console.log(x); //original val is 5, log 5
var result = addToX(-10); //run function with -10 as amount
console.log(result); //return x + amount is 5 plus -5
console.log(x);

// 5, -5, 5






console.log('hi')

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //each value of array up to HALF TEH LENGTH
        var right = arr.length-1-left; //var right is teh last value of the array, also minute the left var value to keep it moving inwards
        if(arr[left] != arr[right]) { //check equal value each end moving through the array 
            return "Not a pal-indrome!"; //returns string (maybe)
        }
    }
    return "Pal-indrome!"; //returns string (maybe)
}
    
var result1 = isPal( [1, 1, 2, 2, 1] ); //result 1 returns after function runs with this arr
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );  //result 1 returns after function runs with this arr
console.log(result2);

//result 1 logs as: Not a palendrome
//result 2 logs as: Pal-indrome




1 NORWEGIAN  YELLOW (fox) (water) kools 
2  Ukranian BLUE (horse)  chesterfields TEA
3 ENGLISHMAN       RED snails  MILK  Old GOLD 
4      spainard  IVORY,dog, OJ, LUCKY STRIKE
5   japanese   zebra      GREEN COFFEE parliaments



/////
// englishman: Red
spainard: dog 
ukarian: tea,//
// coffee : greenhouse 
// green house: immediate right of the ivory house 
old gold smoker: snails 
kools: yellow house //

chesterfields: next to  FOX//
kools: horse //
lucky strike smoker: OJ 
japanese: parliaments 
// norwegian: next to BLUE
water and zebra?>