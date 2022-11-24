import addimage from "../model/user"
import { Response, Request } from "express";
export const imageupload = async (req: Request, res: Response) => {
  const studentbody = new addimage({
    image: req.file?.filename
  })
  const Data = await studentbody.save();
  try {
    res.status(200).json({
      message: "upload successfully",
      result: Data
    })

  }
  catch (e) {
    res.status(404).json({
      message: "upload failed"
    })


  }
}
