// Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})
// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
// Utilized a minimal solution from here: http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/
(function() {
	var rotatedArray = [5, 6, 7, 8, 1, 2, 3];
	var searchForThisNum = 256;
	var minIndex = 0;
    var maxIndex = rotatedArray.length - 1;
    var currentIndex;
    var currentElement;
    var testFound = false;
 
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = rotatedArray[currentIndex];

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