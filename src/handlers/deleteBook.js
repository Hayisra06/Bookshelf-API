const books = require('../books');

const deleteBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;

  // eslint-disable-next-line no-shadow
  const index = books.findIndex((books) => books.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { deleteBooksByIdHandler };
