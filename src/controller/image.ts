import image from "../model/image";
import { Response, Request } from "express";
import mongoose from "mongoose";
export const imageupload = async (req: Request, res: Response) => {
  const studentbody = new image({
    image: req.file?.filename,
  });

  const Data = await studentbody.save();
  try {
    res.status(200).json({
      message: "Image Uploaded",
      result: Data,
    });
  } catch (e) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

// export const getdatabyid = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   console.log(id);
//   const result = await image.findOne({
//     _id: new mongoose.Types.ObjectId(id),
//   });
//   console.log(result);

//   if (result) {
//     res.send({
//       status: true,
//       message: "Data fetched",
//       result: result,
//     });
//   }
// };

//  export const getdatabyid = async (req: Request, res: Response) => {
//   var item = req.body;
//   var params = { Bucket: req.params.todoprnlibucket, Key: 'keyname'}; // keyname can be a filename
//   s3config.getObject(params, function (err: any, data: any) {
//       if (err) {
//           return res.send({ "error": err });
//       }
//       res.send({ data });
//   });
// }

