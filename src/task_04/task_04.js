function isPalindrome () {
    
    // Initializing variables
    var number = $("#number").val();
    var palindrome = [];
    var arrayOfPalindrome = [];
    
    // Input data validation
    function validation () {
        if (Number.isInteger(Number(number)) && (Number(number) > 0)) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "#f44336");
            return false;
        }
    }
    
    // if the entered number is even
    function findPalindrome (token) {
        var isValid = validation();
        if (isValid) {
            var i = 0;
            var left;
            var right;
            while (i < number.length - token) {
                if (number[i] == number[i + token]) {
                    left = i;
                    right = i + token;
                    if (token == 2) { palindrome.push(number[i+1]) };
                    while ((number[left] == number[right]) && (left != -1) && (right != number.length)) {
                        palindrome.push(number[right]);
                        palindrome.unshift(number[left]);
                        left--;
                        right++;
                    }
                    arrayOfPalindrome.push(palindrome.join(""));
                    palindrome = [];
                }
                i++;
            }
            palindromeShow();
            return arrayOfPalindrome;
        } else {
            return false;
        }
    }
    
    // Showing palindrome in the web-page
    function palindromeShow () {
        if (arrayOfPalindrome.length > 0) {
            $("#result").text(arrayOfPalindrome.join(", "));
            $("#result").css("color", "#4CAF50");
        } else {
            $("#result").text("Number is not a palindrome.");
            $("#result").css("color", "#f44336");
        }      
    }

    findPalindrome(1); // Find all even palindromes
    findPalindrome(2); // Find all odd palindromes
}

$("#isPalindrome").click(isPalindrome);