// Find the common elements of 2 int arrays
(function () {
	var testElements1 = [3, 5, 2, 7, 5, 3, 9, 2, 9];
	var testElements2 = [9, 7, 1, 6, 4, 7, 9, 1];
	var resultArray = [];

	for (i = 0, x = testElements1.length; i < x; i++) {
		for (j =0, y = testElements2.length; j < y; j++) {
			if (testElements1[i] === testElements2[j]) {
				resultArray.push(testElements1[i]);
			}
		}
	}
	for (var k = 0, z = resultArray.length; k < z; k++) {
		if (resultArray[k] !== resultArray[k + 1]) {
			document.write(resultArray[k] + "<br>");
		}
	}
})()