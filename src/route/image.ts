import express from "express";
import { imageupload, getImage } from "../controller/image";
import { upload } from "../middleware/image";

export const router = express.Router();

router.post("/imageupload", upload.single("image"), imageupload);
router.get("/get-image",  getImage);

