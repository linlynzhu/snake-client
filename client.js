const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('connected, game start');
    conn.write('Name: Lyn');
    setInterval(() => {
      conn.write('Move: up');
    }, 1000);
    //conn.write('Move: up');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

module.exports = {connect, net};