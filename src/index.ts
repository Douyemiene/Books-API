import 'dotenv/config'
import express from 'express'
import path from 'path'
import connectDB from './db/mongoose';
import bookRouter from './routes/books'
import authRouter from './routes/auth'

const app = express();
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/books',bookRouter)
app.use('/auth',authRouter)

const PORT = process.env.PORT || 3000;

(async () => {
  try{
    await connectDB()
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  }catch(e){
    console.log('error starting server')
  }
})()




