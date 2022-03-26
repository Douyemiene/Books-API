import Users from "../db/models/users.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const createToken = (obj) => {
  //returns a token with a signature and headers are automatically applied
  return jwt.sign(obj, "been working since the jump", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export const register = async (user) => {
    try{
        const hash = await bcrypt.hash(user.password, 10)
        const { _id } = await Users.create({...user, password: hash});
        const token = createToken({id:user._id})
        return token
    }catch(err){
         throw err
        }
}

export const login = async(email, password) => {
  try{
    const user = await Users.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = createToken({id: user._id});
        return {email:user.email,name: user.name,token};
      }
    else{
        throw Error
    }
  }
    
  }catch (err) {
    console.log({err})
    throw err
  }
}




