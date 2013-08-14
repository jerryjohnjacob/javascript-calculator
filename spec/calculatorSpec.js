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
	expect(sum(2,3)).toEqual(5);
    });

});