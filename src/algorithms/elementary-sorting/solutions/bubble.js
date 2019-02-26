
var arr = Array(10).fill();

var randomArray = arr.map(item=>Math.round(Math.random()*100));
var sortedArray = arr.map((item,index)=>index*10);
var reverseArray = arr.map((item,index,array)=>(array.length-index)*10);
var DoubleLengthArray = randomArray.concat(randomArray);


// Exercise 0:
// Write psuedo code for bubble sort(Link to some Psuedocode examples - https://www.unf.edu/~broggio/cop2221/2221pseu.htm)
 
// While k is less than the array length
// 		while i is less than the array length -1
// 			if array[i] is bigger than array[i+1]
// 					swap array[i] with array[i+1]
// 			increment i
// 		increment k


// Exercise 1:
// Implement bubble sort
// Sort all above Arrays using bubble sort

function bubbleSort(array){
	for (let k = 0; k<array.length; k++){
		for (let i = 0; i<array.length-1; i++){
			if (array[i]>array[i+1]){
				swap(i,i+1,array);
			}
		}
	}
	return array;
}

function swap(index1, index2, array){
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

// Exercise 2:
// Add a variable called counter and initialize it to 0;
// Increment counter within the innermost for loop(but outside if statement) & 
// print out the counter value at the end.
// Observe the counter value of all the array & try to calculate the time complexity
// With n being the length, observe if the number is close to n or n-square.


function bubbleSort(array){
	let counter = 0;
	for (let k = 0; k<array.length; k++){
		for (let i = 0; i<array.length-1; i++){
			if (array[i]>array[i+1]){
				swap(i,i+1,array);
			}
			counter++;
		}
	}
	console.log(counter);
	return array;
}

function swap(index1, index2, array){
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}



// Exercise  3:(Optional)
// Optimize the code so that the inner for loop does not iterate till the end of the array everytime

function bubbleSort(array){
	let counter = 0;
	for (let k = 0; k<array.length; k++){
		for (let i = 0; i<array.length-k-1; i++){
			if (array[i]>array[i+1]){
				swap(i,i+1,array);
			}
			counter++;
		}
	}
	console.log(counter);
	return array;
}

function swap(index1, index2, array){
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}


// Exercise 4:(Optional)
// Take the code from exercise 3 & Optimize it further to check 
// after every pass(completion of outer for/while loop) that if the array is already sorted. If yes, terminate.

function bubbleSort(array){
	let counter = 0;
	let sorted = false;

	for (let k = 0; k<array.length; k++){
		let sorted = true;
		for (let i = 0; i<array.length-k-1; i++){
			if (array[i]>array[i+1]){
				swap(i,i+1,array);
				sorted = false;
			}
			counter++;
		}

		if(sorted){
				return array;
		}
	}
	console.log(counter);
	return array;
}

function swap(index1, index2, array){
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}


// Exercise 5: (Optional)
// Implement cocktail sort - (https://en.wikipedia.org/wiki/Cocktail_sort)

function cocktailSort(array){
	let counter = 0;
	let sorted;
	
do{
		sorted = true;

		for (let i = 0; i<array.length-1; i++){
			if (array[i]>array[i+1]){
				swap(i,i+1,array);
				sorted = false;
			}
			counter++;
		}

		for (let j = array.length-1; j>0; j--){
			if (array[j]<array[j-1]){
				swap(j,j-1,array);
				sorted = false;
			}
			counter++;
		}

		if(sorted){
			console.log(counter);
			return array;
		}

} while (!sorted);
	
	console.log(counter);
	return array;
}
