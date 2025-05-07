import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        stock: Number,
    },
    { timestamps: true }
);

export const ProductModel = mongoose.model('Product', productSchema);
