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

function sum(num1, num2) {
    return num1+num2;
}

function calculate() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    if(validateNumber(num1) && validateNumber(num2)){
	var answer = sum(num1,num2);
    }
    if(answer){
	document.getElementById("answer").value=answer;
    }
}