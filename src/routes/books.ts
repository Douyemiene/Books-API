import {Router} from 'express'
import {createBook, getAllBooks} from '../controllers/books.js'
const bookRouter = Router()

bookRouter.post('/', async (req, res) => {
   try{
    const token = await createBook(req.body)
    res.status(201).json({status:'OK',message:'Book created', data: {token}})
   }catch(e){
    res.status(400).json({status:'FAILED',message:'Book creation failed', data: null})
   }
})

bookRouter.get('/', async (req, res) => {
    try{
        const books = await getAllBooks()
        res.status(201).json({status:'OK', data: {books}})
       }catch(e){
        res.status(400).json({status:'FAILED',message:'Retrieval failed', data: null})
       }
    
})


//add categories, one-to-many relationship. that's a category has many books
//add users, users should be able to borrow a book, return a book, search a book using its _id
//users can see books that he has borrowed and read
//admin that can see all users that have borrowed a bookRouter
//add permissions admin and users 

//run through NGINX on docker-compose
//refactor to suit best practices
//write tests.  Mocha n chai. unit tests
//convert to Microservice


//reverse a string 
//goes through a 2d array and return an array of the largest numss



export default bookRouter