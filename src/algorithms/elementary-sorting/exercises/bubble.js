
var arr = Array(10).fill();

var randomArray = arr.map(item=>Math.round(Math.random()*100));
var sortedArray = arr.map((item,index)=>index*10);
var reverseArray = arr.map((item,index,array)=>(array.length-index)*10);
var DoubleLengthArray = randomArray.concat(randomArray);


// Exercise 0: (Do not move into further exercises without completing this)
// Write psuedo code for bubble sort(Link to some Psuedocode examples - https://www.unf.edu/~broggio/cop2221/2221pseu.htm)
 


// Exercise 1:
// Implement bubble sort
// Sort all above Arrays using bubble sort



// Exercise 2:
// Add a variable called counter and initialize it to 0;
// Increment counter within the innermost for loop(but outside if statement) & 
// print out the counter value at the end.
// Observe the counter value of all the array & try to calculate the time complexity
// With n being the length, observe if the number is close to n or n-square.



// Exercise  3:(Optional)
// Optimize the code so that the inner for loop does not iterate till the end of the array everytime



// Exercise 4:(Optional)
// Take the code from exercise 3 & Optimize it further to check 
// after every pass(completion of outer for/while loop) that if the array is already sorted. If yes, terminate.



// Exercise 5: (Optional)
// Implement cocktail sort - (https://en.wikipedia.org/wiki/Cocktail_sort)

