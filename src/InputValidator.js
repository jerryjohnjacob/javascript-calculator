var InputValidator = new Object();

InputValidator.validateNumber = function(num) {
    parsedNum = parseFloat(num);
    try{
	numberRegex = /(\d)+(\.\d)?(\d)*/;
	if(numberRegex.test(num) && parsedNum==num){
	    return true;
	}
	throw new Error("Invalid/empty operand");
    }
    catch(error){
	document.getElementById("answer").value=error;
    }
}

InputValidator.validateOperator = function(operator) {
    try{
	operatorRegex = /^[\+\-\*\/]$/;
	if(operatorRegex.test(operator)){
	    return true;
	}
	throw new Error("Invalid/empty operator");
    }
    catch(error){
	document.getElementById("answer").value=error;
    }
}

InputValidator.validateData = function(dataValue, dataType) {
    var dataTypes = {
	'number': function() {
	    return InputValidator.validateNumber(dataValue);
	},
	'operator': function() {
	    return InputValidator.validateOperator(dataValue);
	}
    };
    return dataTypes[dataType]();
}