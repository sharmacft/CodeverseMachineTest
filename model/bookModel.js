import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
        unique: true,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
    quantity: {
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

const User = mongoose.model('Book', bookSchema);
export default User;


