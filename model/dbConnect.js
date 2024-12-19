import mongoose from 'mongoose';
const dbConnect = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/CodeverseMachineTest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => console.error('Not Connected'));
}
export default dbConnect;