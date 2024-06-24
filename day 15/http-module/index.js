// perbezaan function
// function declration
// function add(a, b) {
//   return a + b;
// }

// // function expression or arrow function
// const add = (a, b) => {
//   return a + b;
// };

// const http = require("node:http");
const http = require("node:http");
const server = http.createServer(function (req, res) {
  res.write("hello world");
  res.end();
});

const PORT = 8080;
server.listen(PORT, function () {
  console.log("serve is running on port " + PORT);
});
