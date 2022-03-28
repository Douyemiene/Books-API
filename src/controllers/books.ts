import {Books, BookCategory} from "../db/models/books"

export const createBookCategory =  async (name) => {
    const { _id } = await BookCategory.create(name);
    return _id
}

export const createBook = async (book) => {
    let category = await BookCategory.findOne({name:book.category})
    if(!category){
        category = await BookCategory.create({name: book.category});
    }
    const bookDoc = await Books.create(book)
    await category.books.push(bookDoc);
    return bookDoc._id
}

export const getAllBooks = async () => {
    const books = await Books.find()
    return books
}