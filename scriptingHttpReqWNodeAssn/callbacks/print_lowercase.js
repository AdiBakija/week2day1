//print_lowercase.js : The exact opposite of the former -
//transforms the html string into poetic lowercase and
//prints it to the console.
var httpFunction = require('../http-function.js');//note the .. for parent directory

function toLower (html) {
  console.log(html.toLowerCase());
}

httpFunction.getHTML(httpFunction.requestOptions, toLower);