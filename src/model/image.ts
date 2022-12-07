import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
});
const Image = mongoose.model("image", userSchema);

export default Image;
