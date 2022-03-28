import {Router} from 'express'
import {createBook, getAllBooks, createBookCategory} from '../controllers/books.js'
const bookRouter = Router()

bookRouter.post('/', async (req, res) => {
   try{
    const id = await createBook(req.body)
    res.status(201).json({status:'OK',message:'Book created', data: {id}})
   }catch(e){
    console.log({e})
    let message = 'Book creation failed'
    if(e.code = "11000"){
        message = "Book already exists"
    }
    res.status(400).json({status:'FAILED',message, data: null})
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

bookRouter.post('/category/:name', async (req, res) => {
    const name = req.params.name;
    try{
     const id = await createBookCategory({name})
     res.status(201).json({status:'OK',message:'Book Category created', data: {id}})
    }catch(e){
        console.log({e})
     res.status(400).json({status:'FAILED',message:'Book category creation failed', data: null})
    }
 })


export default bookRouter