// Find the most frequent integer in an array
// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
(function() {
var testArray = [4, 2, 4, 5, 100, 2, 25, 1, -4, -4, -4, -4, 2, 6]
var sortedArray = testArray.sort(function(a, b){return a - b}); // Numeric sort, ascending
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