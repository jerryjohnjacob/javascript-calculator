describe("Input Validator", function() {

    beforeEach(function () {
	$('#calcContainer').css("display", "none");
	$.ajax({
	    async: false,
	    dataType: 'html',
	    url: 'index.html',
	    success: function(data) {
		$('#calcContainer').html($(data));
	    }
	});
    });

    describe("Number Validator", function() {

	it("should allow valid numbers", function() {
	    expect(InputValidator.validateData(3, 'number')).toBeTruthy();
	});

	it("should show errors when given invalid number", function() {
	    InputValidator.validateData('a','number');
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operand");
	    document.getElementById("answer").value = "";
	});
    });

    describe("Operator Validator", function() {
	it("should allow valid operators", function() {
	    expect(InputValidator.validateData("+", 'operator')).toBeTruthy();
	});

	it("should show errors when given operator", function() {
	    InputValidator.validateData('/3', 'operator');
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operator");
	    document.getElementById("answer").value = "";
	});
    });
});