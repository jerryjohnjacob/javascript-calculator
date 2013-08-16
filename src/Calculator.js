var Calculator = new Object();

Calculator.calculate = function(num1, operator, num2) {
    var operations = {
	'+': function() { 
	    return num1+num2;
	},
	'-': function() {
	    return num1-num2;
	},
	'*': function() {
	    return num1*num2;
	},
	'/': function() {
	    return num1/num2;
	}
    };
    return operations[operator]();
}