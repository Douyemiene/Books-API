import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  email: {
      type: String,
      unique: true,
      required: true
  },
  name: {
    type: String,
    required: true
    },
    password: {
        type: String,
        required: true
    }
});




const Users = mongoose.model("User", UserSchema);
export default Users;
