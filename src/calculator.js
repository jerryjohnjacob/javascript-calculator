function validateNumber(num) {
    try{
	numRegex = /\d+/;
	if(numRegex.test(num)){
	    return true;
	}
	else{
	    throw new Error("Invalid input");
	}
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

function calculate(operation) {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    if(validateNumber(num1) && validateNumber(num2)){
	var answer=null;
	switch(operation) {
	case "add":
	    answer = add(num1,num2);
	    break;
	case "subtract":
	    answer = subtract(num1,num2);
	    break;
	case "multiply":
	    answer = multiply(num1,num2);
	    break;
	case "divide":
	    answer = divide(num1,num2);
	    break;
	}
    }
    if(answer){
	document.getElementById("answer").value=answer;
    }
}