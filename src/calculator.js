function validateNumber(num) {
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

function validateOperator(op) {
    try{
	opRegex = /[\+\-\*\/]/;
	if(opRegex.test(op)){
	    return true;
	}
	throw new Error("Invalid/empty operator");
    }
    catch(e){
	document.getElementById("answer").value=e;
    }
}

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function calculate() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operator = document.getElementById("operator").value;
    if(validateNumber(num1) && validateOperator(operator) && validateNumber(num2)){
	var answer=0;
	switch(operator) {
	case "+":
	    answer = add(num1,num2);
	    break;
	case "-":
	    answer = subtract(num1,num2);
	    break;
	case "*":
	    answer = multiply(num1,num2);
	    break;
	case "/":
	    answer = divide(num1,num2);
	    break;
	}
	document.getElementById("answer").value=answer;
    }
}