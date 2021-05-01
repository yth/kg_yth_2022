const lib = require("./lib");

function expect_equal(value1, value2, error_message) {
	if (!(value1 === value2)) {
		console.log(error_message);
	}
}

console.log(lib.digit_to_string(1));
console.log(lib.integer_to_string(1));
