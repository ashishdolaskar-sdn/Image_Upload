import express from "express";
import { upload } from "../middleware/s3bucket";
import { imageupload } from "../controller/image";
const s3Router = express.Router();
s3Router.post("/s3image", upload.single("image"), imageupload);
export default s3Router;