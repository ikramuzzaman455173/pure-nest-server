import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  flashSaleOffer: {
    type: String,
    required: true
  },
  ratings: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

export default  mongoose.model('Product', productSchema);
