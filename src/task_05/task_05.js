function luckyTickets() {
    
    // Initializing variables
    var minTicket = Number($("#minTicket").val());
    var maxTicket = Number($("#maxTicket").val());
    var winnerAlgorythm = {
        Name : "",
        numberOfEasyTickes : 0,
        numberOfHardTickes : 0
    };
    
    // Tickets constructor
    function Tickets (min, max) {
        this.min = min,
        this.max = max    
    }
    
    // Input data validation
    function validation () {
        if (Number.isInteger(minTicket) && Number.isInteger(maxTicket) && (minTicket >= 0) && (minTicket < 999999) && (maxTicket <= 999999) && (maxTicket > 0) && (maxTicket > minTicket)) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "#f44336");
            return false;
        }
    }
    
    // Converting numbers into 6-digit value
    function numbersCorrection () {
        minTicket = String(minTicket);
        maxTicket = String(maxTicket);
        for (let i = 0; i < 6; i++) {
            if (minTicket.length < 6) {
                minTicket = "0" + minTicket;
            }
            if (maxTicket.length < 6) {
                maxTicket = "0" + maxTicket;
            }
        }
    }
    
    // Counting lucky tickets
    function countLuckyTickets () {
        
        var isValid = validation();
        var leftSum;
        var rightSum;
        var evenSum;
        var oddSum;
        
        // Incrementing the min value
        function minValueIncrement(tickets) {
            tickets.min = Number(tickets.min) + 1;
            tickets.min = String(tickets.min);
            for (let i = 0; i < 6; i++) {
                if ((tickets.min).length < 6) {
                    tickets.min = "0" + tickets.min;
                }
            }
        }
        
        // Showing the result in the web-page
        function showResult () {
            $("#result").html(winnerAlgorythm.Name + "<br>Number of easy tickets: " + winnerAlgorythm.numberOfEasyTickes + "<br> Number of hard tickets: " + winnerAlgorythm.numberOfHardTickes);
            $("#result").css("color", "#4CAF50");
        }
        
        if (isValid) {
            numbersCorrection();
            var tickets = new Tickets (minTicket, maxTicket);
            for (var i = Number(tickets.min); i < Number(tickets.max); i++) {
                leftSum = Number(tickets.min[0]) + Number(tickets.min[1]) + Number(tickets.min[2]);
                rightSum = Number(tickets.min[3]) + Number(tickets.min[4]) + Number(tickets.min[5]);
                evenSum = Number(tickets.min[5]) + Number(tickets.min[3]) + Number(tickets.min[1]);
                oddSum = Number(tickets.min[4]) + Number(tickets.min[2]) + Number(tickets.min[0]);
                if (leftSum == rightSum) {
                    winnerAlgorythm.numberOfEasyTickes += 1;
                };
                if (evenSum == oddSum) {
                    winnerAlgorythm.numberOfHardTickes += 1;
                };
                minValueIncrement(tickets);
            }
            if (winnerAlgorythm.numberOfEasyTickes > winnerAlgorythm.numberOfHardTickes) {
                winnerAlgorythm.Name = "Easy algorythm have won!";
            } else if (winnerAlgorythm.numberOfEasyTickes < winnerAlgorythm.numberOfHardTickes){
                winnerAlgorythm.Name = "Hard algorythm have won!";
            } else {
                winnerAlgorythm.Name = "It's a draw!";
            }
            showResult();
            return winnerAlgorythm;
        } else {
            return false;
        }
    }    
    
    return countLuckyTickets();  
}

$("#luckyTickets").click(luckyTickets);