// Source: http://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
// QUESTION No.5: Find the only element in an array that only occurs once.
(function () {
	var testElements = [3, 5, 2, 7, 5, 3, 9, 2, 9];
	for (var i = 0, x = testElements.length; i < x; i++) {
		var j = i + 1;
		while (j < x) {
			if (testElements[i] === testElements[j]) {
				break;
			}
			if (j === x - 1) {
				document.write(testElements[i] + "<br>");
				i = x;
			}
			j++;
		}
	}
})()