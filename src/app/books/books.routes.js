import express from 'express';

import {
    insertBook,
    insertBooks,
    insertLog,
    updateFutureBook,
    findBookByTitle,
    findBooksByYear,
    findBooksByGenre,
    findBooksWithSkipLimit,
    findBooksWithIntegerYear,
    findBooksExcludingGenres,
    deleteBooksBeforeYear,
    aggregateBooks1,
    aggregateBooks2,
    aggregateBooks3,
    aggregateBooks4
} from './books.controller.js';

const router = express.Router();

router.post('/books', insertBook);
router.post('/books/batch', insertBooks);
router.post('/logs', insertLog);

router.patch('/books/Future', updateFutureBook);

router.get('/books/title', findBookByTitle);
router.get('/books/year', findBooksByYear);
router.get('/books/genre', findBooksByGenre);
router.get('/books/skip-limit', findBooksWithSkipLimit);
router.get('/books/year-integer', findBooksWithIntegerYear);
router.get('/books/exclude-genres', findBooksExcludingGenres);

router.delete('/books/before-year', deleteBooksBeforeYear);

router.get('/books/aggregate1', aggregateBooks1);
router.get('/books/aggregate2', aggregateBooks2);
router.get('/books/aggregate3', aggregateBooks3);
router.get('/books/aggregate4', aggregateBooks4);

export default router;