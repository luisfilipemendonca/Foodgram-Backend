import { Request } from "express";
import multer from "multer";
import { extname, resolve } from "path";

const randomNumber = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb("Your file needs to be PNG or JPG.");
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) =>
      cb(null, `${Date.now()}_${randomNumber()}${extname(file.originalname)}`),
  }),
};
