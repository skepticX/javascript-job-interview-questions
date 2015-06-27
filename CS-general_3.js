// Given 2 integer arrays, determine if the 2nd array is a rotated version of the 1st array.
//Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3}
(function(){
	var initArray = [1, 2, 3, 5, 6, 7, 8];
	var rotatedArray = [6, 7, 8, 1, 2, 3, 5];
	var i = 0;
	var x = rotatedArray.length
	var bool;
	for(i; i < x; i++) {
		rotatedArray.push(rotatedArray.shift());
		if (rotatedArray.join() === initArray.join()) {
				bool = true;
				break;
		}
	}
	document.write(bool ? true : false);
})()