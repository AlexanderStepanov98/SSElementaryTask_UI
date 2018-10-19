function isPalindrome (number) {
    
    // Initializing variables.
    let arrayOfNumber = [];
    let tempArray = [];
    let palindrome = 0;
    let errorMessage = "";
    
    // Input data validation.
    // создать объект ОШИБКА
    // должна возвращать true или false
    function validation (number) {
        if (typeof(number) != typeof(0)) {
            return "Error. Argument must be the type of number."
        } else if (number <= 10) {
            return "Error. Number must be more than 10."
        } else if ((number + "").indexOf(".") > 0) {
            return "Error. Number must be integer."
        } else {
            return "";
        }
    }
    
    // Finding the palindrome.
    function findPalindrome (number) {
        let j = 0;
        let a = 0;
        let b = 0;
        arrayOfNumber = number.toString().split('');
        while (j <= arrayOfNumber.length - 2) {
            if (Number(arrayOfNumber[j]) == Number(arrayOfNumber[j+1])) {
                a = j;
                b = j+1;
                while (Number(arrayOfNumber[a]) == Number(arrayOfNumber[b])) {
                    tempArray.unshift(arrayOfNumber[a]);
                    tempArray.push(arrayOfNumber[b]);
                    console.log("arrayOfNumber[a] = ", arrayOfNumber[a]);
                    console.log("arrayOfNumber[b] = ", arrayOfNumber[b]);
                    a -= 1;
                    b += 1;
                }
            }
            j += 1;
            if (tempArray.length > 1) {
                j = arrayOfNumber.length;
            }
        }
        number = tempArray.join('');
        return Number(number);
    }
    
    // Main programm.
    errorMessage = validation(number);
    
    if (errorMessage) {
        return errorMessage;
    } else {
        return palindrome = findPalindrome(number);
    }
    
}