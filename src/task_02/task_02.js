function envelopeCompare () {
    
    // Initializing variables
    var firstSide1 = Number($("#firstSide1").val());
    var firstSide2 = Number($("#firstSide2").val());
    var secondSide1 = Number($("#secondSide1").val());
    var secondSide2 = Number($("#secondSide2").val());
    
    // Constructor for the envelopes
    function Envelope (side1, side2) {
        this.side1 = side1,
        this.side2 = side2    
    }
    
    // Input data validation
    function validation () {
        if (Number.isInteger(firstSide1) && Number.isInteger(firstSide2) && Number.isInteger(secondSide1) && Number.isInteger(secondSide2)) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "red");
            return false;
        }
    }
    
    // Creating envelope, where side 1 > side 2
    function envelopeCreate (side1, side2) {
        if (side1 >= side2) {
            var envelope = new Envelope(side1, side2);
        } else {
            var envelope = new Envelope(side2, side1);
        }
        return envelope;
    }
    
    // Comparing envelopes and showing the result
    function compare () {
        var isValid = validation();
        if (isValid) {
            var firstEnv = envelopeCreate(firstSide1, firstSide2);
            var secondEnv = envelopeCreate(secondSide1, secondSide2);
            if ((firstEnv.side1 > secondEnv.side1) && (firstEnv.side2 > secondEnv.side2)) {
                $("#result").text("Second envelope can be fit in first envelope");
            } else if ((secondEnv.side1 > firstEnv.side1) && (secondEnv.side2 > firstEnv.side2)) {
                $("#result").text("First envelope can be fit in second envelope");
            } else if ((firstEnv.side1 == secondEnv.side1) && (firstEnv.side2 == firstEnv.side2)) {
                $("#result").text("Envelopes are equal");
            } else {
                $("#result").text("Any envelope can't be fit into another one");
            }
            $("#result").css("color", "#4CAF50");
            return true;
        } else {
            return false;
        }
    }
    
    return compare();
}
    
$("#envelopeCompare").click(envelopeCompare);     