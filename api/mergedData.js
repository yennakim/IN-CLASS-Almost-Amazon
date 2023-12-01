// for merged promises

import { getAuthorBooks, getSingleAuthor, deleteSingleAuthor } from './authorData';
import { getSingleBook, deleteBook } from './bookData';

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
// GET AUTHOR
// Create an object that has book data and an object named authorObject
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(firebaseKey).then((authorBooks) => resolve({ ...authorObject, authorBooks }));
  }).catch(reject);
});

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship };
