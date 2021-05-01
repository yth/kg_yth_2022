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

// Tests for is_integer
expect_equal(lib.is_integer(1), true, "is_integer: 1 -> true failed");
expect_equal(lib.is_integer(1000), true, "is_integer: 1000 -> true failed");
expect_equal(lib.is_integer(-98756432100000000000000000), true,
							"is_integer: -987564321 -> true failed");
expect_equal(lib.is_integer(987564321000000000000000000), true,
							"is_integer: -987564321 -> true failed");
// Due to the limitation of javascript
expect_equal(lib.is_integer(1.000000000000000001), true,
							"is_integer: 1.000000000000000001-> true failed");
expect_equal(lib.is_integer(1.1), false, "is_integer: 1.1 -> false failed");
expect_equal(lib.is_integer(-2313.3), false,
							"is_integer: -2313.3 -> false failed");
expect_equal(lib.is_integer("1"), false, "is_integer: \"1\" -> false failed");
expect_equal(lib.is_integer(NaN), false, "is_integer: NaN -> false failed");

// Tests for is_digit
expect_equal(lib.is_digit(1), true, "is_digit: 1 -> true failed");
// Due to the limitation of javascript
expect_equal(lib.is_digit(1.000000000000000000001), true,
						"is_digit: 1.000000000000000000001 -> true failed");
expect_equal(lib.is_digit(123), false, "is_digit: 123 -> false failed");
expect_equal(lib.is_digit("1"), false, "is_digit: \"1\" -> false failed");

// Tests for digit_to_string
// Good path for digit_to_string
expect_equal(lib.digit_to_string(0), "Zero",
								"digit_to_string: 0 -> Zero failed");
expect_equal(lib.digit_to_string(1), "One",
								"digit_to_string: 1 -> One failed");
expect_equal(lib.digit_to_string(2), "Two",
								"digit_to_string: 2 -> Two failed");
expect_equal(lib.digit_to_string(3), "Three",
								"digit_to_string: 3 -> Three failed");
expect_equal(lib.digit_to_string(4), "Four",
								"digit_to_string: 4 -> Four failed");
expect_equal(lib.digit_to_string(5), "Five",
								"digit_to_string: 5 -> Five failed");
expect_equal(lib.digit_to_string(6), "Six",
								"digit_to_string: 6 -> Six failed");
expect_equal(lib.digit_to_string(7), "Seven",
								"digit_to_string: 7 -> Seven failed");
expect_equal(lib.digit_to_string(8), "Eight",
								"digit_to_string: 8 -> Eight failed");
expect_equal(lib.digit_to_string(9), "Nine",
								"digit_to_string: 9 -> Nine failed");

// Bad path for digit_to_string
expect_throw(lib.digit_to_string, 11,
								"digit_to_string: 11 -> throw error failed");
