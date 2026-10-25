import { db } from '../../common/db/connection.js';
// q1
export const createBooksCollection = async () => {
    return await db.createCollection('books', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['title'],
                properties: {
                    title: {
                        bsonType: 'string',
                        minLength: 1,
                        pattern: '\\S'
                    }
                }
            }
        },
        validationLevel: 'strict',
        validationAction: 'error'
    });
};
//q2
export const createAuthorsCollection = async () => {
    return await db.collection('authors').insertOne({
        name: 'William Shakespeare',
        country: 'England'
    });
};
//Q3
export const createCappedLogsCollection = async () => {
    return await db.createCollection('logs', {
        capped: true,
        size: 1048576
    });
};
//Q4
export const createBooksTitleIndex = async () => {
    return await db.collection('books').createIndex({
        title: 1
    });
};