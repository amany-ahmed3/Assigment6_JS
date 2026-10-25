import * as repository from './books.repository.js';

export const insertBook = (data) =>
    repository.insertBook(data);

export const insertBooks = (data) =>
    repository.insertBooks(data);

export const insertLog = (data) =>
    repository.insertLog(data);

export const updateFutureBook = () =>
    repository.updateFutureBook();

export const findBookByTitle = (title) =>
    repository.findBookByTitle(title);

export const findBooksByYear = (from, to) =>
    repository.findBooksByYear(from, to);

export const findBooksByGenre = (genre) =>
    repository.findBooksByGenre(genre);

export const findBooksWithSkipLimit = () =>
    repository.findBooksWithSkipLimit();

export const findBooksWithIntegerYear = () =>
    repository.findBooksWithIntegerYear();

export const findBooksExcludingGenres = () =>
    repository.findBooksExcludingGenres();

export const deleteBooksBeforeYear = (year) =>
    repository.deleteBooksBeforeYear(year);

export const aggregateBooks1 = () =>
    repository.aggregateBooks1();

export const aggregateBooks2 = () =>
    repository.aggregateBooks2();

export const aggregateBooks3 = () =>
    repository.aggregateBooks3();

export const aggregateBooks4 = () =>
    repository.aggregateBooks4();