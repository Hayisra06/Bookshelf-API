/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
const books = require('../books');

const getAllBooksHandler = (request, h) => {
// var untuk tampung data yang berhasil di get
  const book = [];

  books.forEach((books) => {
    book.push({
      id: books.id,
      name: books.name,
      publisher: books.publisher,
    });
  });

  const { name, reading, finished } = request.query;

  // cek name
  if (name) {
    // name contains dicoding validations
    if (name.toLowerCase() === 'dicoding') {
      const response = h.response({
        status: 'success',
        data: {
          books: book.filter((book) => {
            if (book.name.toLowerCase().includes('dicoding')) {
              return book;
            }
            return false;
          }),
        },
      });
      response.code(200);
      return response;
    }
  }

  // buat variabel buat tampung data yang dibaca
  const bookReading = books.filter((books) => books.reading == reading);
  const newBooksReading = [];

  bookReading.forEach((book) => {
    newBooksReading.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });

  // cek data masuk ke newBooksReading
  if (newBooksReading.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        books: newBooksReading,
      },
    });
    response.code(200);
    return response;
  }

  // buat variabel buat tampung data yang dibaca finished
  const bookFinished = books.filter((books) => books.finished == finished);
  const newBooksFinished = [];

  bookFinished.forEach((book) => {
    newBooksFinished.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    });
  });

  // cek data masuk ke bookFinished
  if (newBooksFinished.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        books: newBooksFinished,
      },
    });
    response.code(200);
    return response;
  }

  // respon jika berhasil get data
  const response = h.response({
    status: 'success',
    data: {
      books: book,
    },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBooksHandler };
