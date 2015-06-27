// Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time)
var findPairsInArray = {
	result: 0,
	getPairs: function(arr) {
		for (var i = 0, x = arr.length; i < x; i++) {
			for (var j = i + 1; j < x; j++) {
				result = arr[i] + arr[j];
				if (result === 10) {
					document.write(arr[i] + " + " + arr[j] + "<br>");
				}
			}
		}
	}
}
findPairsInArray.getPairs([1, 2, 12, 3, 4, 5, 6, 7, 3, 8, 9, 10]);