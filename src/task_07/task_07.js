function fibonachiCount (context) {

    var fibonachiArr = [];
    var result;
    
    function minMaxValidation (context) {
        if (typeof(context) != typeof({})) {
            return false;
        } else if ((typeof(context.min) || typeof(context.max)) != typeof(Number())) {
            return false;       
        } else if (((context.min || context.max) <= 0) || (context.min > context.max)) {
            return false;       
        } else {
            return true;
        }
    }
    
    function lengthValidation (context) {
        if (typeof(context.length) != typeof(Number())) {
            return false;
        } else if (context.length <= 0) {
            return false;
        } else {
            return true;
        }
    }
    
    
    // Execute this function if fields min and max exist. 
    function minMaxCount (context) {
        let firstFib = 1;
        let secondFib = 1;
        let currentFib = 0;
        console.log(context.max);
        while (firstFib <= context.max) {
            if (firstFib >= context.min && firstFib <= context.max) {
                fibonachiArr.push(firstFib);
            }
            console.log("firstFib = ", firstFib);
            currentFib = firstFib + secondFib;
            firstFib = secondFib;
            secondFib = currentFib;     
        }
        return fibonachiArr;
    }
    
    // Execute this function if fields min and max DOES NOT exist, and if field length exists.
    function lengthCount (context) {
        let firstFib = 1;
        let secondFib = 1;
        let currentFib = 0;
        for (let i = 0; i < context.length; i++) {
            console.log("firstFib = ", firstFib);
            fibonachiArr.push(firstFib);
            currentFib = firstFib + secondFib;
            firstFib = secondFib;
            secondFib = currentFib;
        }
        return fibonachiArr;
    }
    
    
    // main programm
    if (minMaxValidation(context)) {
        result = minMaxCount(context);
        return result;
    } else {
        if (lengthValidation(context)) {
            result = lengthCount(context);
            return result;
        } else {
            return "Mistake";
        }
    }
    
}