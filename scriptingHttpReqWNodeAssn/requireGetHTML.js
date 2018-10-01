var httpFunction = require('./http-function')

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };
//Considering that I have exported all functions I can call on them
//with the following dot notation below.
httpFunction.getHTML(httpFunction.requestOptions, httpFunction.printHTML);