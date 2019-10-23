'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 0) {
		return "array is empty"
	}
	if (array.length === 1) {
			if (target !== array[0]) {
							return false;
			} else {
					return true;
			}
	} else {
			let middle = Math.floor(array.length/2);
			console.log('middle>>>> ', middle)
			console.log('array[middle]>>>> ', array[middle])
			console.log('target>>>> ', target)
			if (array[middle] === target) {
					return true;
			} else if (array[middle] < target) {
					let slicedArrayRight = array.slice(middle);
					return binarySearch(slicedArrayRight, target);
			} else {
					let slicedArrayLeft = array.slice(0, middle);
					return binarySearch(slicedArrayLeft, target);
			}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
