
var arr = Array(10).fill();

var randomArray = arr.map(item=>Math.round(Math.random()*100));
var sortedArray = arr.map((item,index)=>index*10);
var reverseArray = arr.map((item,index,array)=>(array.length-index)*10);
var DoubleLengthArray = randomArray.concat(randomArray);


// Exercise 0:
// Write psuedo code for insertion sort(Link to some Psuedocode examples - https://www.unf.edu/~broggio/cop2221/2221pseu.htm)

// K start with 1
// While k is less than the array length
//    key is array[k]
// 		j is key - 1
// 		while j is greater or equal to zero and key is less than array[j]
// 			array[j+1] = array[j]
// 			increment j
// 		array[j] = key;			
// 		increment k


// Exercise 1:
// Implement insertion sort
// Sort all above Arrays using insertion sort

function insertionSort(array){
	let len = array.length;
	let k = 1;
	while (k<len) {
		let key = array[k];
		let j = k-1;
		while(j>=0 && key<array[j]){
			array[j+1]=array[j];
			j--;
		}
		array[j+1] = key;
		k++;
	}
	return array;
}


// Exercise 2:
// Add a variable called counter and initialize it to 0;
// Increment counter within the innermost for loop(but outside if-else statements) & 
// print out the counter value at the end.
// Observe the counter value of all the array & try to calculate the time complexity

function insertionSort(array){
	let len = array.length;
	let k = 1;
	let counter = 0;
	while (k<len) {
		let key = array[k];
		let j = k-1;
		while(j>=0 && key<array[j]){
			array[j+1]=array[j];
			j--;
			counter++;
		}
		array[j+1] = key;
		k++;
	}
	console.log(counter)
	return array;
}



