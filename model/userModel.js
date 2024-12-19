import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    age: {
        type: Number
    },
    profileImg: {
        type: String,
    },
    createdBy: {
        type: String
    },
    isDeleted: {
        type: Number,
        default: 0,
    },
    status: {
        type: Number,
        default: 1
    },
    role: {
        type: Number,
        default: 0
    },
    otp: {
        type: Number,
    },
    verifyOtp: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;


