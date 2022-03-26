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






