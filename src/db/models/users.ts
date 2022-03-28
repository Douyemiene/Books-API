import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const UserSchema = new mongoose.Schema({
  email: {
      type: String,
      unique: true,
      required: true
  },
  name: reqString,
  password: reqString
});




const Users = mongoose.model("User", UserSchema);
export default Users;
