import express from 'express';
import adminRoutes from './routes/adminRouter.js';
import userRoutes from './routes/userRouter.js';
import bodyParser from 'body-parser';
import dbConnect from './model/dbConnect.js';
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
dbConnect();
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});