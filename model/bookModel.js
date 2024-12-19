import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    bookName: {
        type: String,
    },
    authorName: {
        type: String,
        unique: true,
    },
    price: {
        type: String,
    },
    discription: {
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
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;


