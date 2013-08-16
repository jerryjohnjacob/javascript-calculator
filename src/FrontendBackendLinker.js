function performCalculation() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operator = document.getElementById("operator").value;

    if(InputValidator.validateData(num1,'number') && InputValidator.validateData(operator,'operator') && InputValidator.validateData(num2,'number')) {
	var answer = Calculator.calculate(parseFloat(num1), operator, parseFloat(num2));
	document.getElementById("answer").value = answer;
    }
}