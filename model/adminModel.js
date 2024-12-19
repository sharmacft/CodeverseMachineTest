import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    status: {
        type: Number,
        default: 1
    },
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);