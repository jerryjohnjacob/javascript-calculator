describe("Calculator", function() {
    describe("Validations", function() {
	it("should allow valid numbers", function() {
	    expect(validateNumber(3)).toBeTruthy();
	});

	it("should show errors when given invalid number", function() {
	    validateNumber('a');
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operand");
	    document.getElementById("answer").value = "";
	});

	it("should allow valid operators", function() {
	    expect(validateOperator("+")).toBeTruthy();
	});

	it("should show errors when given operator", function() {
	    validateOperator('35a');
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operator");
	    document.getElementById("answer").value = "";
	});
    });

    describe("Core functions", function() {
	it("should be able to add two numbers", function() {
	    expect(add(2,3)).toEqual(5);
	});
	
	it("should be able to subtract two numbers", function() {
	    expect(subtract(2,3)).toEqual(-1);
	});
	
	it("should be able to multiply two numbers", function() {
	    expect(multiply(2,3)).toEqual(6);
	});
	
	it("should be able to divide two numbers", function() {
	    expect(divide(3,2)).toEqual(1.5);
	});
    });
});