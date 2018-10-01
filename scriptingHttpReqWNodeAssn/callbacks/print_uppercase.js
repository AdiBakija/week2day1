var httpFunction = require('../http-function.js');

function toUpper (html) {
  console.log(html.toUpperCase());
}

httpFunction.getHTML(httpFunction.requestOptions, toUpper);