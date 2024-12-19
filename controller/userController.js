import User from '../model/userModel.js';
import Address from '../model/addressModel.js';

export const registerUser = async (req, res) => {
    try {
        const { name, age, phone, email, username, password } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
        const user = new User({ name, age, phone, email, username, password, otp });
        await user.save();
        res.send({ code: "200", msg: 'OTP sent for verification' });
    } catch (error) {
        res.send({ code: "500", msg: 'Failed to register user', error: error.message });
    }
};

export const verifyOTP = async (req, res) => {
    try {
        const { userId, otp } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.send({ code: "500", msg: 'User not found' });
        }

        if (user.otp === otp) {
            user.otp = null;
            await user.save();
            res.send({ code: "200", msg: 'User verified' });
        } else {
            res.send({ code: "500", msg: 'Invalid OTP' });
        }
    } catch (error) {
        ressend({ code: "500", msg: 'OTP verification failed', error: error.message });
    }
};

export const addAddress = async (req, res) => {
    try {
        const { userId, addressLine, city, state, zipCode, country } = req.body;
        const address = new Address({ userId, addressLine, city, state, zipCode, country });
        await address.save();
        res.send({ code: "200", msg: 'Address added successfully' });
    } catch (error) {
        res.send({ code: "500", msg: 'Failed to add address', error: error.message });
    }
};
