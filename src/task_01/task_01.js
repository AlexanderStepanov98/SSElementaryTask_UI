function chessDeskCreate(chessDeskLength, chessDeskWidth, chessDeskSymbol) {
    
    // Checking if the input data is correct.
    if (!(chessDeskLength) || !(chessDeskWidth) || !(chessDeskSymbol)) { 
        return "Entered arguments are not correct, please check the function description."
    }
    let lengthIsCorrect = ((chessDeskLength > 1) && (chessDeskLength < 100));
    let widthIsCorrect = ((chessDeskWidth > 1) && (chessDeskWidth < 100));
    let symbolIsCorrect = ((chessDeskSymbol.length > 0) && (chessDeskSymbol != " ") && (chessDeskSymbol.length != 0)); 
    
    // Creating 2 strings, which are outputed one after another in the cycle
    if ((lengthIsCorrect) && (widthIsCorrect) && (symbolIsCorrect)) {
        for (let i = 0; i < chessDeskLength; i++) {
            let firstRow = chessDeskSymbol + " ";
            let secondRow = " " + chessDeskSymbol;
            let rowsFilled = false;
            if (rowsFilled == false) {
                for (let j = 0; j < chessDeskWidth - 1; j++) {
                    if (firstRow != chessDeskWidth - 1) {
                        firstRow += chessDeskSymbol + " ";
                        secondRow += " " + chessDeskSymbol;
                    };
                }
            rowsFilled == true;    
            }    
            if (((i % 2) == 0) || (i == 0)) {   
                console.log("|" + firstRow + "|"); 
            } else {
                console.log("|" + secondRow + "|");       
            }
        }
    } else { return "Ooops, something went wrong! Please, check in the description if the agruments are correct."; } 
    
    return "Chess desk successfully created!";
}
