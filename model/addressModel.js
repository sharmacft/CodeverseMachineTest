import mongoose from 'mongoose';
const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    addressLine: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipCode: {
        type: String
    },
    country: {
        type: String
    },
    status: {
        type: Number,
        default: 1
    },
}, { timestamps: true });

export default mongoose.model('Address', addressSchema);
