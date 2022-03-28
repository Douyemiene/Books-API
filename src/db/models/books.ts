import mongoose from "mongoose";

const Schema = mongoose.Schema

const reqString = {
  type: String,
  required: true
}

const uniqReqString = {
  ...reqString,  required: true
}


const BookSchema = new Schema({
  isbn: {
      ...reqString,
      required: true
  },
  title: reqString,
  author: reqString,
});

const bookCategory = new Schema({
  name: uniqReqString,
  books: [{type: Schema.Types.ObjectId, ref: 'book'}]
});


const BookCategory = mongoose.model('bookCategory', bookCategory);
const Books = mongoose.model("book", BookSchema);
export {Books, BookCategory};
