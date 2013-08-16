var InputValidator = new Object();

InputValidator.validateNumber = function(num) {
    parsedNum = parseFloat(num);
    try{
	numRegex = /(\d)+(\.\d)?(\d)*/;
	if(numRegex.test(num) && parsedNum==num){
	    return true;
	}
	throw new Error("Invalid/empty operand");
    }
    catch(e){
	document.getElementById("answer").value=e;
    }
}

InputValidator.validateOperator = function(op) {
    try{
	opRegex = /^[\+\-\*\/]$/;
	if(opRegex.test(op)){
	    return true;
	}
	throw new Error("Invalid/empty operator");
    }
    catch(e){
	document.getElementById("answer").value=e;
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