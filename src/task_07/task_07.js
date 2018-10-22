function fibonachiCount () {

    // Initializing variables
    var fibonachiArr = [];
    var min = Number($("#minValue").val());
    var max = Number($("#maxValue").val());
    var length = Number($("#length").val());
    
    // Constructor for min/max fibonachi 
    function FibonachiMinMax (min, max) {
        this.min = min,
        this.max = max
    }
    
    // Constructor for length fibonachi
    function FibonachiLength (length) {
        this.length = length
    }
    
    // Input data validation
    function validation () {
        if ((Number.isInteger(min) && Number.isInteger(max) && (min >= 0) && (max >= 0) && (max > min) && (length == 0)) || ((min == 0) && (max == 0) && Number.isInteger(length) && length > 0)) {
            console.log("validation OK");
            return true;
        } else {
            console.log("validation FAILED");
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "#f44336");
            return false;
        }
    }
    
    // Showing result in the web-page
    function showResult () {
        if (fibonachiArr.length > 0) {
            $("#result").text(fibonachiArr.join(", "));
            $("#result").css("color", "#4CAF50");
        } else {
            $("#result").text("No such fibonachi numbers.");
            $("#result").css("color", "#f44336");
        }
    }
    
    
    // Counting fibonachi
    function countFib () {
        
        var isValid = validation();
        var firstFib = 1;
        var secondFib = 1;
        var currentFib;
        
        if (isValid) {
            if (length == 0) { 
                var fibonachi = new FibonachiMinMax (min, max);
                while (firstFib <= fibonachi.max) {
                    if (firstFib >= min && firstFib <= max) {
                        fibonachiArr.push(firstFib);
                    }
                    currentFib = firstFib + secondFib;
                    firstFib = secondFib;
                    secondFib = currentFib;
                }
                showResult();
                return fibonachiArr;
            } else {
                var fibonachi = new FibonachiLength (length);
                for (var i = 0; i < fibonachi.length; i++) {
                    fibonachiArr.push(firstFib);
                    currentFib = firstFib + secondFib;
                    firstFib = secondFib;
                    secondFib = currentFib;
                }
                showResult();
                return fibonachiArr;
            }
        } else {
            return false;
        }
    }
    
    return countFib(); 
}

$("#fibonachiCount").click(fibonachiCount);