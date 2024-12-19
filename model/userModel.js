import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
    },
    age: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    profilePicture: {
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


