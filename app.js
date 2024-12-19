import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './model/dbConnect.js';
const app = express();
const PORT = process.env.PORT || 3000;
dbConnect();
app.get('/', (req, res) => {
    console.log('runnig')
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});