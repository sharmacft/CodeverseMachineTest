import Admin from '../model/adminModel.js';
import Book from '../model/bookModel.js'

export const createAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            res.send({ msg: 'Admin with this email already exists' });
        }
        const admin = new Admin({ username, email, password });
        await admin.save();

        res.send({ code: "200", msg: 'Admin account created successfully' });
    } catch (error) {
        res.send({ code: "500", error: error });
    }
};

export const addBook = async (req, res) => {
    try {
        const { name, author, price, description, quantity } = req.body;
        const book = new Book({
            name,
            author,
            price,
            description,
            quantity,
        });

        await book.save();
        res.send({ code: "200", msg: 'Book added successfully' });

    } catch (error) {
        res.send({ code: "500", error: error });
    }
};

export const updateBookQuantity = async (req, res) => {
    try {
        const { bookId, quantity } = req.body;
        const book = await Book.findById(bookId);
        if (!book) {
            return res.send({ code: "500", msg: 'Book not found' });

        }
        book.quantity = quantity;
        await book.save();
        res.send({ code: "200", msg: 'Book quantity updated successfully' });
    } catch (error) {
        res.send({ code: "500", error: error });

    }
};
