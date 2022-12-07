import express from "express";
import {imageupload} from "../controller/image"
import { upload } from "../middleware/s3bucket";
const s3Router = express.Router();
s3Router.post("/s3image", upload.single("image"), imageupload);
// s3Router.get("/getimage",getdatabyid)
export default s3Router;