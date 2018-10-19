function naturalNumbers (lenth, min) {
    
    var arrayOfNaturalNumbers = [];
    var result;
    
    function isValid(lenth, min) {
        console.log(typeof(lenth), lenth);
        console.log(typeof(min), min);
        if ((typeof(lenth) || typeof(min)) != typeof(Number())) {
            return false;
        } else if ((lenth || min) <= 0) {
            return false;       
        } else {
            return true;
        }
    }
    
    function countNumbers (lenth, min) {
        let minSqrt = Math.ceil(Math.sqrt(min));
        for (let i = minSqrt; i <= minSqrt + lenth; i++) {
            arrayOfNaturalNumbers.push(String(i));
        }
        return arrayOfNaturalNumbers.join();
    }
    
    if (isValid(lenth, min)) {
        return (result = countNumbers(lenth, min));
    } else {
        return "Mistake";
    } 
}