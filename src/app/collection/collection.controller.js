import * as service from './collection.service.js';
//
export const createBooksCollection = async (req, res) => {
    try {
        const result = await service.createBooksCollection();

        return res.status(201).json({
            success: true,
            message: 'Books collection created successfully',
            data: {
                collectionName: result.collectionName
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
//

export const createAuthorsCollection = async (req, res) => {
    try {
        const data = await service.createAuthorsCollection();

        res.status(201).json({
            success: true,
            message: 'Author inserted successfully',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//
export const createCappedLogsCollection = async (req, res) => {
    try {
        const data = await service.createCappedLogsCollection();

        res.status(201).json({
            success: true,
            message: 'Capped logs collection created',
            data:{
                collectionName:data.collectionName
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
//
export const createBooksTitleIndex = async (req, res) => {
    try {
        const data = await service.createBooksTitleIndex();

        res.status(200).json({
            success: true,
            message: 'Books title index created',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};