describe("Calculator", function() {
    describe("Core functions", function() {
	it("should be able to add two numbers", function() {
	    expect(Calculator.calculate(2,'+',3)).toEqual(5);
	});
	
	it("should be able to subtract two numbers", function() {
	    expect(Calculator.calculate(2,'-',3)).toEqual(-1);
	});
	
	it("should be able to multiply two numbers", function() {
	    expect(Calculator.calculate(2,'*',3)).toEqual(6);
	});
	
	it("should be able to divide two numbers", function() {
	    expect(Calculator.calculate(3,'/',2)).toEqual(1.5);
	});
    });
});