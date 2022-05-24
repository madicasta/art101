/*
 * Author: Madisen Castaneda <mcorreac@ucsc.edu>
 * Created 3 May 2022
 * License: Public Domain
 */

 function isEven(x){
   return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [25, 8, 14, 54, 1001, 2028]
console.log("My array", array);

var result = array.map(isEven);
// should return [false, true, true, true, false, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
// should return (6) [5, 2.8284271247461903, 3.7416573867739413,
// 7.3484692283495345, 31.63858403911275, 45.033320996790806]
console.log("Squareroot of array:", results);
