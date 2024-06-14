import express from 'express';
import {
  deleteBook,
  getBook,
  getIdBook,
  saveBook,
  updateBook,
} from '../controller/book.controller.js';
const router = express.Router();
// Route for save a new book post method request

router.post('/', saveBook);
//route for get the all the books
router.get('/', getBook);
// route for getting the book from a single id
router.get('/:id', getIdBook);
// route to update the book
router.put('/:id', updateBook);
// route to delete the book from the id
router.delete('/:id', deleteBook);
export default router;
