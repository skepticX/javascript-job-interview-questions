// Find the most frequent integer in an array
(function() {
var sortedArray = [4, 2, 4, 5, 100, 2, 25, 1, -4, -4, -4, -4, 2, 6].sort(function(a, b){return a-b}); // Numeric sort
var count = 0, tempCount = 1, result = 0;

for (var i = 0, x = sortedArray.length; i < x; i++) {
	if (sortedArray[i] === sortedArray[i + 1]) {
		tempCount++;
	}
	else if (tempCount > count) {
			count = tempCount;
			tempCount = 1;
			result = sortedArray[i];
	}
}
document.write(result);
}());