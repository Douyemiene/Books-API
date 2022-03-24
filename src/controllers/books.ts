import Books from "../db/books.js"

export const createBook = async (book) => {
    console.log({book})
    const { _id } = await Books.create(book);
    return _id
}

export const getAllBooks = async () => {
    const books = await Books.find()
    return books
}