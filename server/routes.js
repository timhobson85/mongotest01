const express = require('express'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../'),
  router = express.Router(),

  { AuthorsController, 
    BooksController } = require('../controllers');

module.exports = function(app) {

  
  router.get('/authors', AuthorsController.index);
  router.get('/authors/:id', AuthorsController.show);
  router.get('/', AuthorsController.show);

  app.use('/api', router);
};