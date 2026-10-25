import { ObjectId } from 'mongodb';
import { db } from '../../common/db/connection.js';

const books = db.collection('books');
const logs = db.collection('logs');

// Question 5
export const insertBook = async (data) => {
    return await books.insertOne(data);
};

// Question 6
export const insertBooks = async (data) => {
    return await books.insertMany(data);
};

// Question 7
export const insertLog = async (data) => {
    const log = { ...data };

    if (
        typeof log.bookId === 'string' &&
        /^[0-9a-fA-F]{24}$/.test(log.bookId)
    ) {
        log.bookId = new ObjectId(log.bookId);
    }

    return await logs.insertOne(log);
};

// Question 8
export const updateFutureBook = async () => {
    return await books.updateOne(
        { title: 'Future' },
        { $set: { year: 2022 } }
    );
};

// Question 9
export const findBookByTitle = async (title) => {
    return await books.find({ title }).toArray();
};

// Question 10
export const findBooksByYear = async (from, to) => {
    return await books.find({
        year: { $gte: from, $lte: to }
    }).toArray();
};

// Question 11
export const findBooksByGenre = async (genre) => {
    return await books.find({
        genres: genre
    }).toArray();
};

// Question 12
export const findBooksWithSkipLimit = async () => {
    return await books.find()
        .sort({ year: -1 })
        .skip(2)
        .limit(3)
        .toArray();
};

// Question 13
export const findBooksWithIntegerYear = async () => {
    return await books.find({
        year: { $type: 'int' }
    }).toArray();
};

// Question 14
export const findBooksExcludingGenres = async () => {
    return await books.find({
        genres: {
            $nin: ['Horror', 'Science Fiction']
        }
    }).toArray();
};

// Question 15
export const deleteBooksBeforeYear = async (year) => {
    return await books.deleteMany({
        year: { $lt: year }
    });
};

// Question 16
export const aggregateBooks1 = async () => {
    return await books.aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $sort: { year: -1 } }
    ]).toArray();
};

// Question 17
export const aggregateBooks2 = async () => {
    return await books.aggregate([
        { $match: { year: { $gt: 2000 } } },
        {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]).toArray();
};

// Question 18
export const aggregateBooks3 = async () => {
    return await books.aggregate([
        { $unwind: '$genres' }
    ]).toArray();
};

// Question 19
export const aggregateBooks4 = async () => {
    return await books.aggregate([
        {
            $lookup: {
                from: 'logs',
                localField: '_id',
                foreignField: 'bookId',
                as: 'logs'
            }
        }
    ]).toArray();
};