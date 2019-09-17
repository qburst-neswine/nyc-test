const app = require('./app.js');
const http = require('http')
const server = http.createServer(app);
const PORT = process.env.NODE_ENV || 5000;


server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
})