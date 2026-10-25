import * as repository from './collection.repository.js';

export const createBooksCollection = () =>
    repository.createBooksCollection();

export const createAuthorsCollection = () =>
    repository.createAuthorsCollection();

export const createCappedLogsCollection = () =>
    repository.createCappedLogsCollection();

export const createBooksTitleIndex = () =>
    repository.createBooksTitleIndex();