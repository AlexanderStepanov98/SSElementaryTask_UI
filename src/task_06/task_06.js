function naturalNumbers () {
    
    // Initializing variables
    var length = Number($("#length").val());
    var minSquare = Number($("#minSquare").val());
    var resultArr = [];
    
    // Input data validation
    function validation () {
        if (Number.isInteger(length) && (length > 0) && Number(minSquare) && minSquare > 0) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "#f44336");
            return false;
        }
    }
    
    // Showing result in the web-page
    function showResult () {
            $("#result").text(resultArr.join(", "));
            $("#result").css("color", "#4CAF50");
    }
    
    // Counting numbers, which square is more than minSquare
    function countNumbers () {
        var isValid = validation();
        if (isValid) {
            var minSqrt = Math.ceil(Math.sqrt(minSquare));
            for (var i = minSqrt; i <= minSqrt + length - 1; i++) {
                resultArr.push(String(i));
            }
            showResult();
            return resultArr.join(", ");
        } else {
            return false;    
        }   
    }
    
    return countNumbers();
}

$("#naturalNumbers").click(naturalNumbers);