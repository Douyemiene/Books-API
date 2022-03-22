import {Router} from 'express'
import {createBook, getAllBooks} from '../controllers/books.js'
const bookRouter = Router()

bookRouter.post('/', async (req, res) => {
   try{
    const id = await createBook(req.body)
    res.status(201).json({status:'OK',message:'Book created', data: {id}})
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

export default bookRouter