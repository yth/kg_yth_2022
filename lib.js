/**
 * This function determines if the input is an integer.
 * @method is_integer
 * @param  {number}   value A javascript value
 * @return {Boolean}        Returns true if it is an integer, else false
 *
 * Example:
 * is_integer(1) -> true
 * is_integer(1000) -> true
 * is_integer(1.000000000000000001) -> true // limitation of javascript
 * is_integer(1.1) -> false
 * is_integer(-2313.3) -> false
 * is_integer("1") -> false
 * is_integer(NaN) -> false
 */
function is_integer(value) {
	if (typeof(value) === "number") {
		return value % 1 === 0;
	}

	return false;
}

/**
 * This function determines if the input is a digit.
 * @method is_digit
 * @param  {number}  value A javascript number that is not a special number
 * @throw                  Will throw an error if the input is not a number
 * @return {Boolean}       Returns true if it is only a digit, else false
 *
 * Example:
 * is_digit(1) -> true
 * is_digit(1.000000000000000000001) -> true // limitation of javascript
 * is_digit(123) -> false
 * is_digit("1") -> false
 */
function is_digit(value) {
	return is_integer(value) && value >= 0 && value < 10;
}


/**
 * This function converts an integer digit into its phonetic equivalent.
 * @method digit_to_string
 * @param  {number}        digit [0-9]
 * @throw                        Will throw an error for non-matching input
 * @return {string}              Phonetic equivalent of the digit
 *
 * Example:
 * digit_to_string(0) -> "Zero"
 * digit_to_string(9) -> "Nine"
 * digit_to_string(11) -> throwing error
 * digit_to_string("11") -> throwing error
 */
function digit_to_string(digit) {
	if (is_digit(digit)) {
		if (digit === 1) {
			return "One";
		} else if (digit === 2) {
			return "Two";
		} else if (digit === 3) {
			return "Three";
		} else if (digit === 4) {
			return "Four";
		} else if (digit === 5) {
			return "Five";
		} else if (digit === 6) {
			return "Six";
		} else if (digit === 7) {
			return "Seven";
		} else if (digit === 8) {
			return "Eight";
		} else if (digit === 9) {
			return "Nine";
		} else {
			return "Zero";
		}
	} else {
		throw "digit_to_string: Input must be an integer between 0 and 9.";
	}
}

/**
 * This function convert an positive integer into its phonetic equivalent.
 * @method integer_to_string
 * @param  {number}          integer positive integer
 * @throw                            Will throw an error for non-matching input
 * @return {string}                  Phonetic equivalent of the integer
 *
 * Example:
 * integer_to_string(0) -> "Zero"
 * integer_to_string(11) -> "OneOne"
 * integer_to_string(-11) -> throwing error
 * integer_to_string("11") -> throwing error
 */
function integer_to_string(integer) {
	return "Not Implemented";
}

module.exports = { is_integer, is_digit, digit_to_string, integer_to_string };
