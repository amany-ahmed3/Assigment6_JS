import express from 'express';

import {
    createBooksCollection,
    createAuthorsCollection,
    createCappedLogsCollection,
    createBooksTitleIndex
} from './collection.controller.js';

const router = express.Router();

router.post('/books', createBooksCollection);
router.post('/authors', createAuthorsCollection);
router.post('/logs/capped', createCappedLogsCollection);
router.post('/books/index', createBooksTitleIndex);

export default router;