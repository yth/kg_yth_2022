const lib = require("./lib");

// Getting commandline argument
const arguments = process.argv.slice(2);

// Process commandline argument into correct form
var function_inputs = [];
for (argument of arguments) {
	var x = parseInt(argument);
	if (lib.is_integer(x) && x >= 0) {
		function_inputs.push(x)
	} else {
		console.log("USAGE: node main.js [positive integer]*");
		process.exit(1);
	}
}

// Main
try {
	console.log(lib.list_of_integers_to_string(function_inputs));
} catch {
	console.log("USAGE: node main.js [positive integer]*");
	process.exit(1);
}
