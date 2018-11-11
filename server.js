const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const endpoints = require("./router")(jsonServer); 

server.use(endpoints);
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
})