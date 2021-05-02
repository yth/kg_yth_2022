LOOKUP_TABLE = ["Zero", "One", "Two", "Three", "Four",
				"Five", "Six", "Seven", "Eight", "Nine"]

/**
 * This function determines if the input is an integer.
 * @method is_integer
 * @param  {number}   value A JavaScript value
 * @return {Boolean}        Returns true if it is an integer, else false
 *
 * Example:
 * is_integer(1) -> true
 * is_integer(1000) -> true
 * is_integer(1.000000000000000001) -> true // limitation of JavaScript
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
 * @param  {number}  value A JavaScript value
 * @return {Boolean}       Returns true only if it is only a positive digit
 *
 * Example:
 * is_digit(1) -> true
 * is_digit(1.000000000000000000001) -> true // limitation of JavaScript
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
		return LOOKUP_TABLE[digit]
	} else {
		throw "digit_to_string: Input must be an integer between 0 and 9.";
	}
}

/**
 * This function converts an positive integer into its phonetic equivalent.
 * @method integer_to_string
 * @param  {number}          integer A positive integer
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
	if (is_integer(integer)) {
		if (integer >= 0) {
			var digit = integer % 10;
			var rest = (integer - digit) / 10;

			if (rest === 0) {
				return digit_to_string(digit);
			} else {
				return integer_to_string(rest) + digit_to_string(digit);
			}

		} else {
			throw "integer_to_string: Input must be a positive integer.";
		}
	} else {
		throw "integer_to_string: Input must be a integer.";
	}
}

/**
 * This function converts a list of integers into its phonetic equivalent.
 * @method list_of_integer_to_string
 * @param  {list}  list_of_integer A list of positive integers
 * @throw          Will throw error if list contain non-positive integer values
 * @return {string}  Phonetic equivalent of the list of integers
 *               The list of phonetic equivalent strings are separated by comma
 *
 * Example:
 * list_of_integers_to_string([]) -> ""
 * list_of_integers_to_string([1]) -> "One"
 * list_of_integers_to_string([1, 2]) -> "One,Two"
 * list_of_integers_to_string([34, 5, 6]) -> "ThreeFour,Five,Six"
 * list_of_integers_to_string(1) -> throw error
 * list_of_integers_to_string([-1]) -> throwing error
 * list_of_integers_to_string(["1"]) -> throwing error
 * list_of_integers_to_string([3.14]) -> throwing error
 * list_of_integers_to_string([1, 2, 3, "4"]) -> throwing error
 */
function list_of_integers_to_string(list_of_integers) {
	if (list_of_integers.constructor === Array) {
		var res = "";
		for (element of list_of_integers) {
			if (is_integer(element) && element >= 0) {
				if (res === "") {
					res += integer_to_string(element);
				} else {
					res += ",";
					res += integer_to_string(element);
				}
			} else {
				throw "list_of_integers_to_string: Input must be a list of positive integers.";
			}
		}

		return res;
	} else {
		throw "list_of_integers_to_string: Input must be a list of integers.";
	}
}

module.exports = { is_integer,
				   is_digit,
				   digit_to_string,
				   integer_to_string,
				   list_of_integers_to_string };
