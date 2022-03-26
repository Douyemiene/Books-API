import {Router} from 'express'
import {register,login} from '../controllers/auth.js'
const authRouter = Router()

authRouter.post('/signup', async (req, res) => {
   try{
    const token = await register(req.body)
    res.status(201).json({status:'OK',message:'User registration was successful', data:{token}})
   }catch(e){
    let message = 'User registration failed'
    if(e.code = '11000'){
        message = 'email has been used by another user'
    }
    res.status(400).json({status:'FAILED',message, data: null})
   }
})



export default authRouter