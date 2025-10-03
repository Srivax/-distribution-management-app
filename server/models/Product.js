const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // This field must be provided
  },
  price: {
    type: Number,
    required: true
  }
});
