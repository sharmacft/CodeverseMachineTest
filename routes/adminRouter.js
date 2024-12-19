import express from 'express';
import { createAdmin, addBook, updateBookQuantity } from '../controller/adminController.js';

const router = express.Router();

router.post('/create', createAdmin);
router.post('/add-book', addBook);
router.put('/update-quantity', updateBookQuantity);

export default router;