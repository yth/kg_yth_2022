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
	return "Not Implemented"
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
	return "Not Implemented"
}

module.exports = { digit_to_string, integer_to_string };
