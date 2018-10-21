var trianglesArr = [];

function addTriangle () {
    
    // Initializing variables
    var trName = $("#triangleName").val();
    var trSide1 = Number($("#triangleSide1").val());
    var trSide2 = Number($("#triangleSide2").val());
    var trSide3 = Number($("#triangleSide3").val());      
    
    // Clear inputs after adding triangle
    function clearInput () {
        $("input").each(function () {
            $(this).val("");
        });
    }
    
    // Triangles constructor
    function Triangle (name, side1, side2, side3) {
        this.name = name,
        this.side1 = side1,
        this.side2 = side2,
        this.side3 = side3    
    }
    
    // Input data validation
    function validation () {
        if ((trSide1 > 0) && (trSide2 > 0) && (trSide3 > 0)) {
            return true;
        } else {
            $("#result").text("Error. Input data is incorrect.");
            $("#result").css("color", "red");
            return false;
        }
    }
    
    // Triangle existence check
    function triangleExist () {
        if (((trSide1 + trSide2) > trSide3) && ((trSide1 + trSide3) > trSide2) && ((trSide2 + trSide3) > trSide1)) {
            return true;
        } else {
            $("#result").text("Error. Such triangle can not exist.");
            $("#result").css("color", "red");
            return false;
        }
    }
    
    // Creating triangle
    function triangleCreate () {
        var isValid = (validation() && triangleExist());
        if (isValid) {
            var triangle = new Triangle (trName, trSide1, trSide2, trSide3);
            trianglesArr.push(triangle);
            triangleShow();
            clearInput();
            return triangle;
        } else {
            return false;
        }
    }
    
    return triangleCreate(); 
}

function clearAll () {
    $("input").each(function(index) {
        $(this).val("");
    });
    trianglesArr = [];
    $("#result").text("");
    return true;
}

function trianglesSort () {
    
    var p; // perimeter
    
    // Sorting conditions
    function triangleSquareCompare (tr1, tr2) {
        return (tr2.square - tr1.square);
    }
    
    if (trianglesArr.length > 0) {
        for (var i = 0; i < trianglesArr.length; i++) {
            p = ((trianglesArr[i].side1 + trianglesArr[i].side2 + trianglesArr[i].side3) / 2);
            trianglesArr[i].square = Math.sqrt(Math.abs(p * (p - trianglesArr[i].side1) * (p - trianglesArr[i].side2) * (p - trianglesArr[i].side3)));
        }
        trianglesArr.sort(triangleSquareCompare);
        triangleShow();
        return trianglesArr;
    } else {
        $("#result").text("Error. You must add at least 1 triangle.");
        $("#result").css("color", "red");
        return false;
    }
}

function triangleShow () {
    var trNames = [];
    trianglesArr.forEach(function (tr) {
        trNames.push(tr.name);
    })
    $("#result").text(trNames.join(", "));
    $("#result").css("color", "#4CAF50");
}

$("#triangleAdd").click(addTriangle);
$("#trianglesSort").click(trianglesSort);
$("#reset").click(clearAll);