// Write a multiply function that multiples 2 integers without using *
// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/

(function() {
	function multiply(num1, num2) {
        var result = 0;
        for (var i = 1; i <= num1; i++) {
                result = result + num2;
            }
        return result;
    }
    document.write(multiply(5, 9));
}());