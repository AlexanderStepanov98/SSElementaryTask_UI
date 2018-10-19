function envelopeCompare (firstEnvelope, secondEnvelope) {
    
    // Initializing variables.
    let a;
    let b;
    let c;
    let d;
    let counter = 0;
    let errorMessage = "";
    let inputDataIsCorrect;
    
    // Setting the values of the first envelope.
    Object.keys(firstEnvelope).forEach(function (key) {
        if (counter == 0) {
            a = firstEnvelope[key];
        } else if (counter == 1) {
            b = firstEnvelope[key];
        } else if (counter > 1) {
            return (errorMessage = "Error. Objects have incorrect number of fields. Objects must have only 2 fields.");
        }
        counter += 1;     
    });
    
    counter = 0;
    
    // Setting the values of the second envelope.
    Object.keys(secondEnvelope).forEach(function (key) {
        if (counter == 0) {
            c = secondEnvelope[key];   
        } else if (counter == 1) {
            d = secondEnvelope[key];
        } else if (counter > 1) { 
            return (errorMessage = "Error. Objects have incorrect number of fields. Objects must have only 2 fields.");
        }
        counter += 1;     
    });
    
    
    // Checking if the input data is correct.
    inputDataIsCorrect = !(isNaN(Number(a + b + c + d)));
        
    // Analyzing which envelope can fit in another one. 
    if (inputDataIsCorrect) {
        if ((a > c) && (b > d)) {
            console.log("Second envelope can fit in first envelope");
        } else if ((a < c) && (b < d)) {
            console.log("First envelope can fit in second envelope");
        } else if ((a > d) && (b > c)) {
            console.log("Second envelope can fit in first envelope");
        } else if ((a < d) && (b < c)) {
            console.log("First envelope can fit in second envelope");
        } else if (((a > c) && (b < d)) || ((a < c) && (b > d)))  {
            if ((a > d) && (b > c)) {
                console.log("Second envelope can fit in first envelope");
            } else if ((a < d) && (b < c)) {
                console.log("First envelope can fit in second envelope");
            } else {
                console.log("First envelope and second envelope do not match");
            }
        } else if (((a > d) && (b < c)) || ((a < d) && (b > c))) {
            if ((a > c) && (b > d)) {
                console.log("Second envelope can fit in first envelope");
            } else if ((a < c) && (b < d)) {
                console.log("First envelope can fit in second envelope");
            } else {
                console.log("First envelope and second envelope do not match");
            }
        } else {
            console.log("First envelope and second envelope do not match");
        }
    } else {
        errorMessage = "Error. Objects must have only fields with numeric values.";
    }
    
    // Finishing the function or outputing the error message. 
    if (errorMessage) {
        return errorMessage;
    } else {
        return "Envelope task completed successfully!";
    }
    
}