describe("Calculator", function() {
    it("should validate numbers", function() {
	expect(validateNumber(3)).toBe(true);
    });

    it("should show errors when given invalid input", function() {
	validateNumber('a');
	var output = document.getElementById("answer").value
	expect(output).toEqual("Error: Invalid input");
	document.getElementById("answer").value = "";
    });

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