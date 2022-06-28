const admin = require('firebase-admin');
const fs = require('fs');

const requestHandler = async (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/signup' && method === 'POST') {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    const userResponse = await admin.auth().createUser({
      email: data.email,
      password: data.password,
      emailVerified: false,
      disabled: false
    })
    res.end(JSON.stringify(userResponse));
  }
  res.end();
};

exports.handler = requestHandler;
