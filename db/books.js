import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
  isbn: {
      type: String,
      unique: true,
      required: true
  },
  title: {
    type: String,
    required: true
    },
  author: {
    type: String,
    required: true
}
});


const Books = mongoose.model("Book", BookSchema);
export default Books;
