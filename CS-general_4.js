/*Write fibbonaci iteratively and recursively (bonus: use dynamic programming)*/

// Iteratively
(function(){
	var fiboArray = [0, 1], iter = 10;
	for (var i = 1; i <= iter; i++) {
		fiboArray.push(fiboArray[i] + fiboArray[i-1]);
	}
	document.write(fiboArray + " ");
})();

// Recursively
