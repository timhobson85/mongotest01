var path = require('path');
  rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  developement: {
    rootPath: rootPath,
    db: 'mongodb://localhost/monogodb-relationships',
    port: 3000
  },
  production: {
    rootPath: rootPath,
    db: process.env.PORT
  }
};