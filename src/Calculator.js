var Calculator = new Object();

Calculator.calculate = function(num1, operator, num2) {
    switch(operator) {
    case '+':
	return num1+num2;
	break;
    case '-':
	return num1-num2;
	break;
    case '*':
	return num1*num2;
	break;
    case '/':
	return num1/num2;
	break;
    }
}