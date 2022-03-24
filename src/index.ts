import 'dotenv/config'
import express from 'express'
import path from 'path'
import connectDB from './db/mongoose';
import bookRouter from './routes/books'

const app = express();
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/books',bookRouter)

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




