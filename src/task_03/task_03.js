function trianglesSort (arrayOfTriangles) {
    
    // Initializing variables.
    let counter = 0;
    let errorMessage = "";
    let sortedTriangles = [];
    let sortedTrianglesNames = [];
    let sorted
    let a = 0;
    let b = 0;
    let c = 0;
    let p = 0;
    let square = 0;
    
    // Function used for sorting the output array.
    function triangleSquareCompare (tr1, tr2) {
        return (tr2.square - tr1.square);
    }
    
    // Checking if:
    //     The function is not empty
    //     The function argument is array
    //     The array must have at least 2 objects
    //     Objects must have 4 fields
    if ((Array.isArray(arrayOfTriangles)) && (arrayOfTriangles.length >= 2)) {
        for (let i = 0; i <= arrayOfTriangles.length - 1; i++) {
            if (typeof(arrayOfTriangles[i]) == typeof({})) {
                Object.keys(arrayOfTriangles[i]).forEach(function (key) {
                    counter += 1;
                })
                if (counter != 4) {
                    return errorMessage = "Error. Objects must contain 4 fields."
                }
                counter = 0;
            } else {
                return (errorMessage = "Error. Array must contain only Objects.");
            }
        }
    } else {
        return (errorMessage = "Error. Entered argument must be the type of Array. Array must have at least 2 objects.");
    }
    
    
    // If all the above conditions are OK, than scanning array and copying objects into <currentTriangle>.
    // <currentTriangle> is stored in the new array, which will be sorted.
    // Also, checking if the 2, 3, 4 fields are numeric.
    if (!(errorMessage)) {
        for (let i = 0; i <= arrayOfTriangles.length - 1; i++) {
            let currentTriangle = {};
            Object.keys(arrayOfTriangles[i]).forEach(function (key) {
                if (counter == 0) {
                    currentTriangle.vertices = arrayOfTriangles[i][key];
                } else if (counter == 1) {
                    currentTriangle.a = arrayOfTriangles[i][key];
                    a = currentTriangle.a;
                } else if (counter == 2) {
                    currentTriangle.b = arrayOfTriangles[i][key];
                    b = currentTriangle.b;
                } else if (counter == 3) {
                    currentTriangle.c = arrayOfTriangles[i][key];
                    c = currentTriangle.c;
                } else if (counter > 3) {
                    return (errorMessage = "Error. Objects must have only 4 fields.");
                }
            counter += 1;    
            })
            p = ((a + b + c) / 2);
            square = Math.sqrt(Math.abs(p * (p - a) * (p - b) * (p - c)));
            if ((Number.isNaN(p)) || (Number.isNaN(square))) {
                return (errorMessage = "Error. Incorrect field types. Please, check the instruction.")   
            } else {
                currentTriangle.p = p;
                currentTriangle.square = square;
                console.log(currentTriangle);
                sortedTriangles.push(currentTriangle);
                counter = 0;
            }
        }
    } else {
        return (errorMessage = "Error. Check the function description.");
    }
    
    // Sorting and outputting sorted array.
    if (errorMessage) {
        return errorMessage;
    } else {
        sortedTriangles.sort(triangleSquareCompare);
        for (let i = 0; i <= sortedTriangles.length - 1; i++) {
            sortedTrianglesNames.push(sortedTriangles[i].vertices);
        }
        return sortedTrianglesNames;
    }
    
}