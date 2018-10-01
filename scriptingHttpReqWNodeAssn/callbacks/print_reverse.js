var httpFunction = require('../http-function.js');

function reverse (html) {

  console.log(html.split("").reverse().join(""));
}

httpFunction.getHTML(httpFunction.requestOptions, reverse);