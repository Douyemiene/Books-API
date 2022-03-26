import Books from "../db/models/books.js"

export const createBook = async (book) => {
    const { _id } = await Books.create(book);
    return _id
}

export const getAllBooks = async () => {
    const books = await Books.find()
    return books
}