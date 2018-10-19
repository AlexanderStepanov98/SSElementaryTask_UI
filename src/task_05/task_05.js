function luckyTickets(context) {
    
    let minStr;
    let maxStr;
    let winnerAlgorythm = {
        winnerAlgorythmName : "",
        numberOfEasyTickes : 0,
        numberOfHardTickes : 0
    };
    
    function isValid(context) {
        if (!context) {
            return false;
        } else if (typeof(context) != typeof({})) {
            return false;
        } else if (context.min == undefined || context.max == undefined || isNaN(Number(context.min)) || isNaN(Number(context.max)) || typeof(context.min) == typeof("") || typeof(context.max) == typeof("")) {
            return false;
        } else if ((context.min < 0) || (context.max > 999999)) {
            return false;
        } else if (context.min >= context.max) {
            return false;
        } else {
            context.min = String(context.min);
            context.max = String(context.max);
            for (let i = 0; i < 6; i++) {
                if ((context.min).length < 6) {
                    context.min = "0" + context.min;
                }
                if ((context.max).length < 6) {
                    context.max = "0" + context.max;
                }
            }
            return true;
        }
    }
    
    function minValueIncrement(context) {
        context.min = Number(context.min) + 1;
        context.min = String(context.min);
        for (let i = 0; i < 6; i++) {
            if ((context.min).length < 6) {
                context.min = "0" + context.min;
            }
        }
    }
    
    function countLuckyTickets(context) {
        let easyAlgorythmLeftSum;
        let easyAlgorythmRightSum;
        let hardAlgorythmEvenSum;
        let hardAlgorythmOddSum;
        for (let i = Number(context.min); i < Number(context.max); i++) {
            easyAlgorythmLeftSum = Number(context.min[0]) + Number(context.min[1]) + Number(context.min[2]);
            easyAlgorythmRightSum = Number(context.min[3]) + Number(context.min[4]) + Number(context.min[5]);
            hardAlgorythmEvenSum = Number(context.min[5]) + Number(context.min[3]) + Number(context.min[1]);
            hardAlgorythmOddSum = Number(context.min[4]) + Number(context.min[2]) + Number(context.min[0]);
            if (easyAlgorythmLeftSum == easyAlgorythmRightSum) {
                winnerAlgorythm.numberOfEasyTickes += 1;
            }
            if (hardAlgorythmEvenSum == hardAlgorythmOddSum) {
                winnerAlgorythm.numberOfHardTickes += 1;
            }
            minValueIncrement(context);
        }
        if (winnerAlgorythm.numberOfEasyTickes > winnerAlgorythm.numberOfHardTickes) {
            winnerAlgorythm.winnerAlgorythmName = "Easy algorythm have won!";
        } else if (winnerAlgorythm.numberOfEasyTickes < winnerAlgorythm.numberOfHardTickes){
            winnerAlgorythm.winnerAlgorythmName = "Hard algorythm have won!";
        } else {
            winnerAlgorythm.winnerAlgorythmName = "It's a draw!";
        }
        return winnerAlgorythm;
    }
    
    
    if (isValid(context)) {
        return countLuckyTickets(context); 
    } else {
        return "Mistake";
    }
    
}