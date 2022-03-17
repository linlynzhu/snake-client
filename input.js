// setup interface to handle user input from stdin
// register an event listener for stdin
// Stores the active TCP connection object.
let connection;

const setupInput = function(connect) {
  connection = connect;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  else if (key === 'a') {
    connection.write("Move: left");
  }
  else if (key === 's') {
    connection.write("Move: down");
  }
  else if (key === 'd') {
    connection.write("Move: right");
  }
};

module.exports = setupInput;