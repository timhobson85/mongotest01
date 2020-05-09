// const { Book } = require('../models');

// module.exports = {
  //   async index(){
    //     return await Book.all().populate('author');
//   }
// };


const { Book } = require('../models');

const BooksController = {
  async index(req, res){
    const books = await Book
      .find()
    res.send(books);
  }
}

module.exports = BooksController;