// algos 6/29

// 1) Nesting arrays 
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array
function isPresent2D(arr2d,value){
    for(var i = 0; i < arr2d.length; i++){
        for(var y = 0; y< arr2d[i].length; y++){
        if(arr2d[i][y] == value){
           return true }
        }
    }
}
var run = isPresent2D(arr2d,8);
console.log(run)

// //justme trying filter
// var int = arr2d.filter(isPresent2D)
// function isPresent2D(arr2d,value) {
//     return int = value
// }
// var x = console.log(isPresent2D(arr2d,5))


//flatten array 
// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
 
function newFunction (arr){
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr.length; j++){
        if(arr[i].length > 1){
        }
    }
}