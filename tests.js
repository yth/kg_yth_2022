const lib = require("./lib");

function expect_equal(value1, value2, error_message) {
	if (!(value1 === value2)) {
		console.log(error_message);
	}
}

function expect_throw(f, args, error_message) {
	try {
		f(args);
		console.log(error_message);
	} catch {
		return;
	}
}

// Good path for digit_to_string
expect_equal(lib.digit_to_string(0), "Zero", "0 -> Zero failed");
expect_equal(lib.digit_to_string(1), "One", "1 -> One failed");
expect_equal(lib.digit_to_string(2), "Two", "2 -> Two failed");
expect_equal(lib.digit_to_string(3), "Three", "3 -> Three failed");
expect_equal(lib.digit_to_string(4), "Four", "4 -> Four failed");
expect_equal(lib.digit_to_string(5), "Five", "5 -> Five failed");
expect_equal(lib.digit_to_string(6), "Six", "6 -> Six failed");
expect_equal(lib.digit_to_string(7), "Seven", "7 -> Seven failed");
expect_equal(lib.digit_to_string(8), "Eight", "8 -> Eight failed");
expect_equal(lib.digit_to_string(9), "Nine", "9 -> Nine failed");

// Bad path for digit_to_string
expect_throw(lib.digit_to_string, 11, "11 -> throw error failed");

// console.log(lib.digit_to_string(1));
// console.log(lib.integer_to_string(1));
