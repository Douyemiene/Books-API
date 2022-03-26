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

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const userandToken = await login(email, password);
        res.status(201).json({status:'OK',message:'User login was successful', data:{...userandToken}})
       }catch(e){
        res.status(400).json({status:'FAILED',message: 'User login failed', data: null})
       }
 })

export default authRouter