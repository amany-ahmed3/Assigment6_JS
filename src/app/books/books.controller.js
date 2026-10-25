import * as service from './books.service.js';

// Question 5
export const insertBook = async (req, res) => {
    try {
        const data = await service.insertBook(req.body);

        res.status(201).json({
            success: true,
            message: 'Book inserted successfully',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 6
export const insertBooks = async (req, res) => {
    try {
        if (!Array.isArray(req.body) || req.body.length < 3) {
            return res.status(400).json({
                success: false,
                message: 'Provide at least 3 books in an array'
            });
        }

        const data = await service.insertBooks(req.body);

        res.status(201).json({
            success: true,
            message: 'Books inserted successfully',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 7
export const insertLog = async (req, res) => {
    try {
        const data = await service.insertLog(req.body);

        res.status(201).json({
            success: true,
            message: 'Log inserted successfully',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 8
export const updateFutureBook = async (req, res) => {
    try {
        const data = await service.updateFutureBook();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 9
export const findBookByTitle = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }

        const data = await service.findBookByTitle(title);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 10
export const findBooksByYear = async (req, res) => {
    try {
        const from = Number(req.query.from);
        const to = Number(req.query.to);

        if (
            req.query.from === undefined ||
            req.query.to === undefined ||
            !Number.isInteger(from) ||
            !Number.isInteger(to) ||
            from > to
        ) {
            return res.status(400).json({
                success: false,
                message: 'Valid from and to years are required'
            });
        }

        const data = await service.findBooksByYear(from, to);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 11
export const findBooksByGenre = async (req, res) => {
    try {
        const { genre } = req.query;

        if (!genre) {
            return res.status(400).json({
                success: false,
                message: 'Genre is required'
            });
        }

        const data = await service.findBooksByGenre(genre);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 12
export const findBooksWithSkipLimit = async (req, res) => {
    try {
        const data = await service.findBooksWithSkipLimit();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 13
export const findBooksWithIntegerYear = async (req, res) => {
    try {
        const data = await service.findBooksWithIntegerYear();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 14
export const findBooksExcludingGenres = async (req, res) => {
    try {
        const data = await service.findBooksExcludingGenres();res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 15
export const deleteBooksBeforeYear = async (req, res) => {
    try {
        const year = Number(req.query.year);

        if (
            req.query.year === undefined ||
            !Number.isInteger(year)
        ) {
            return res.status(400).json({
                success: false,
                message: 'A valid year is required'
            });
        }

        const data = await service.deleteBooksBeforeYear(year);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 16
export const aggregateBooks1 = async (req, res) => {
    try {
        const data = await service.aggregateBooks1();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 17
export const aggregateBooks2 = async (req, res) => {
    try {
        const data = await service.aggregateBooks2();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 18
export const aggregateBooks3 = async (req, res) => {
    try {
        const data = await service.aggregateBooks3();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Question 19
export const aggregateBooks4 = async (req, res) => {
    try {
        const data = await service.aggregateBooks4();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};