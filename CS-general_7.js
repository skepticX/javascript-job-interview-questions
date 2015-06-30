// Implement binary search of a sorted array of integers
// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
// Utilized a minimal solution from here: http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/
(function() {
	var testArray = [7, 2, 4, 5, 100, 15, 25, 1, -4, -10, -3, 256, 163, 6, 11];
	var sortedArray = testArray.sort(function(a, b){return a - b}); // Numeric sort, ascending
	var searchForThisNum = 256;
	var minIndex = 0;
    var maxIndex = sortedArray.length - 1;
    var currentIndex;
    var currentElement;
    var testFound = false;
 
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = sortedArray[currentIndex];

        if (currentElement === searchForThisNum) {
            document.write(searchForThisNum + " searched and found!<br>");
            testFound = true;
            break;
        }
        else if (currentElement < searchForThisNum) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchForThisNum) {
            maxIndex = currentIndex - 1;
        }
    }
    if (testFound === false) {
    	document.write(searchForThisNum + " not found!<br>");
    }
}());