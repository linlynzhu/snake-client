const {connect} = require('./client');

console.log("Connecting ...");
const connectObject = connect();

const setupInput = require('./input');
setupInput(connectObject);
