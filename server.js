const xmlrpc = require("xmlrpc");

const server = xmlrpc.createServer({ host: "127.0.0.1", port: 1337 });

server.on("Hello", (error, params, callback) => {
  callback(null, `Hello, ${params[0]}`);
});

server.on("NotFound", (method, params) => {
  console.log(`Method ${method} not found`);
});

server.on("Sum", (error, params, callback) => {
  const result = params[0] + params[1];
  callback(null, result);
});

server.on("Div", (error, params, callback) => {
  let result;
  try {
    if (!params[1]) throw "Divider can not be 0";
    result = params[0] / params[1];
  } catch (error) {
    callback(error);
  } finally {
    callback(null, result);
  }
});
