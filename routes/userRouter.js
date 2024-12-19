import express from 'express';
import { registerUser, verifyOTP, addAddress } from '../controller/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP);
router.post('/add-address', addAddress);

export default router;
