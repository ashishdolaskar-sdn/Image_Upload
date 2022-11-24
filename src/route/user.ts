import express  from "express"
import {imageupload} from "../controller/user"
import { upload } from "../middleware/uploadfile";
 export const router=express.Router()
 router.post("/imageupload",upload.single('image'),imageupload);
