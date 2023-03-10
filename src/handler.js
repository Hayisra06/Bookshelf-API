const addBooks = require('./handlers/addBooks');
const getAllBooks = require('./handlers/getAllBooks');
const getAllBooksById = require('./handlers/getAllBooksById');
const deleteBook = require('./handlers/deleteBook');
const updateBook = require('./handlers/updatBooks');

const { addBooksHandler } = addBooks;
const { getAllBooksHandler } = getAllBooks;
const { getBooksByIdHandler } = getAllBooksById;
const { deleteBooksByIdHandler } = deleteBook;
const { updateBookByIdHandler } = updateBook;

module.exports = {
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  deleteBooksByIdHandler,
  updateBookByIdHandler,
};
