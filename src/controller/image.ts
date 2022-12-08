import Image from "../model/image";
import { Response, Request } from "express";
import mongoose from "mongoose";
export const imageupload = async (req: Request, res: Response) => {
  const studentbody = new Image({
    image: req.file?.filename,
  });

  const Data = await studentbody.save();
  
  try {
    res.status(200).json({
      message: "Image Uploaded",
      result: Data,
      image: Data.image
    });
  } catch (e) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const result = await Image.find();
      for (let key in result) {
        result[key].image = `http://localhost:7979/uploads/${result[key].image}`;
      }


    if (result) {
      return res.status(200).json({
        message: "Success",
        result: result,
      });
    }
  } catch (e) {
    throw e;
  }
};

