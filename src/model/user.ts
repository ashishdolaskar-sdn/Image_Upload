import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  image: {
    type: String,

  },
});
const addimage = mongoose.model("addimage", userSchema);

export default addimage;
