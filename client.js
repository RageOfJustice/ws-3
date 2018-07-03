const xmlrpc = require("xmlrpc");

const client = xmlrpc.createClient({
  host: "127.0.0.1",
  port: 1337,
  path: "/"
});

client.methodCall("Hello", ["Nikolay"], function(error, value) {
  // Results of the method response
  console.log(value);
});

client.methodCall("Div", [1, 0], function(error, value) {
  if (error) {
    console.log(error.body);
  } else console.log(value);
});

client.methodCall("Div", [1, 4], function(error, value) {
  if (error) {
    console.log(error.body);
  } else console.log(value);
});

client.methodCall("Sum", [1, 12], function(error, value) {
  if (error) {
    console.log(error.body);
  } else {
    console.log(value);
  }
});
