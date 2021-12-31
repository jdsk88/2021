import express from "express";
import path from "path";
import multer from "multer";
import fs from "fs";

const directoryPath = path.join(path.resolve(), "uploads");
let dir = [];
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    dir.push(file);
  });
});

const routes = express.Router();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadArray = multer({
  storage: storage,
  limits: { fieldSize: 5000000 },
}).array("files", 10);

routes.get("/", (req, res) => {
  const fileUrl = `${req.protocol}://${req.hostname}/uploads/litleBear.png`;
  res.send(fileUrl);
});

routes.get("/dir", (req, res) => {
  res.send(dir);
});

routes.get("/download/:fileName", (req, res) => {
  const { fileName } = req.params;
  const file = `${path.resolve()}/uploads/${fileName}`;
  res.download(file);
  // res.send({ status: "ok", file: fileName });
});

routes.post("/create", uploadArray, (req, res) => {
  console.log(req.files, req.file);
  try {
    res.send(req.files);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});

export default routes;