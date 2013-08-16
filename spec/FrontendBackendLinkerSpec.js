describe("Frontend-Backend Linker", function() {

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

    describe("Basic Function", function() {
	it("should provide result of calculation when given valid input", function() {
	    document.getElementById("num1").value = "3";
	    document.getElementById("operator").value = "*";
	    document.getElementById("num2").value = "2";
	    performCalculation();
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("6");
	});

	it("should show errors when given invalid operand", function() {
	    document.getElementById("num1").value = "a";
	    document.getElementById("operator").value = "*";
	    document.getElementById("num2").value = "2";
	    performCalculation();
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operand");
	});

	it("should show errors when given invalid operator", function() {
	    document.getElementById("num1").value = "3";
	    document.getElementById("operator").value = "x";
	    document.getElementById("num2").value = "2";
	    performCalculation();
	    var output = document.getElementById("answer").value;
	    expect(output).toEqual("Error: Invalid/empty operator");
	});

    });
    afterEach(function() {
	document.getElementById("answer").value = "";
    });
});