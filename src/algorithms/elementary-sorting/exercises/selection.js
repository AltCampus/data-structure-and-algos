var arr = Array(10).fill();

var randomArray = arr.map(item=>Math.round(Math.random()*100));
var sortedArray = arr.map((item,index)=>index*10);
var reverseArray = arr.map((item,index,array)=>(array.length-index)*10);
var DoubleLengthArray = randomArray.concat(randomArray);


// Exercise 0:
// Write psuedo code for selection sort(Link to some Psuedocode examples - https://www.unf.edu/~broggio/cop2221/2221pseu.htm)



// Exercise 1:
// Implement selection sort
// Sort all above Arrays using selection sort



// Exercise 3:(Optional)
// Modify the above code to take a comparison function and sort accordingly
// Use it to sort the below array using a comparison to sort according to the height

var students = [{name:'Sam', age: 22, height: 178},
								{name:'Thomas', age: 24, height: 173},
								{name:'Jackson', age: 25, height: 188},
								{name:'Paul', age: 27, height: 173},
								{name:'Aaron', age: 27, height: 167}];

// comparison function

// selection sort

// Exercise 4: (Optional)
// As seen in Exercise 3, the above implementation is not stable.
// Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?

