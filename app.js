const http = require('http');
const admin = require('firebase-admin');

const credentials = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

const routes = require('./route');

const server = http.createServer(routes.handler);

server.listen(3000);
