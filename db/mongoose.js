import mongoose from 'mongoose'

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected ${conn.connection.host}`);
  }catch (e) {
      console.log('An error occured while trying to connect to MongoDB')
  }
};

export default connectDB

