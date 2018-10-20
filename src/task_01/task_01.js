function chessDeskCreate() {
    
    // Initializing variables
    var length = Number($("#length").val());
    var width = Number($("#width").val());
    var symbol = String($("#symbol").val());
    var firstRow = symbol + " ";
    var secondRow = " " + symbol;
    
    // Constructor for the chess desk
    function ChessDesk (length, width, symbol) {
        this.length = length,
        this.width = width,
        this.symbol = symbol    
    }
    
    // Input data validation
    function validation () {  
        if (Number.isInteger(length) && Number.isInteger(width) && (symbol.length > 0)) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "red");
            return false;
        }
    }
    
    // Creating chess desk
    function cdCreate () {
        
        var paramsIsValid = validation();
        
        function rowsCreate () {
            for (let i = 0; i < chessDesk.width - 1; i++) {
                firstRow += chessDesk.symbol + " ";
                secondRow += " " + chessDesk.symbol; 
            }
        }
        
        if (paramsIsValid) {
            var chessDesk = new ChessDesk (length, width, symbol);
            chessDesk.resultBoard = "";
            rowsCreate();
            for (let i = 0; i < chessDesk.length; i++) {    
                if (((i % 2) == 0) || (i == 0)) {   
                    chessDesk.resultBoard += firstRow + "</br>";
                } else {
                    chessDesk.resultBoard += secondRow + "</br>";
                }
            }
            $("#result").css("color", "#555555");
            return chessDesk.resultBoard;
        }
    }
    
    // Showing the result on the web-page
    function cdShow () {
        $("#result").html(cdCreate());
    }
    
    return cdShow();
}

$("#chessDeskCreate").click(chessDeskCreate);

