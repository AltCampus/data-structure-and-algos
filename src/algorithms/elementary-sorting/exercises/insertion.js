
var arr = Array(10).fill();

var randomArray = arr.map(item=>Math.round(Math.random()*100));
var sortedArray = arr.map((item,index)=>index*10);
var reverseArray = arr.map((item,index,array)=>(array.length-index)*10);
var DoubleLengthArray = randomArray.concat(randomArray);


// Exercise 0: (Do not move into further exercises without completing this)
// Write psuedo code for insertion sort(Link to some Psuedocode examples - https://www.unf.edu/~broggio/cop2221/2221pseu.htm)
 

// Exercise 1:
// Implement insertion sort
// Sort all above Arrays using insertion sort


// Exercise 2:
// Add a variable called counter and initialize it to 0;
// Increment counter within the innermost for loop(but outside if-else statements) & 
// print out the counter value at the end.
// Observe the counter value of all the array & try to calculate the time complexity
