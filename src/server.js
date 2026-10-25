import express from 'express';

import { connectDB } from './common/db/connection.js';
import collectionRoutes from './app/collection/collection.routes.js';
import booksRoutes from './app/books/books.routes.js';

const app = express();

app.use(express.json());

app.use('/collection', collectionRoutes);
app.use('/', booksRoutes);

await connectDB();

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})

