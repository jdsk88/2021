import "./config/mongo.js";
import express from "express";
import cors from "cors";
import errorhandler from "errorhandler";
import morgan from "morgan";
import { logger } from "./config/constants.js";
import { options } from "./config/cors.js";
import fs from "fs";
import https from "https";
import routes from "./routes/index.js";
import rfs from "rotating-file-stream";
import path from "path";

const app = express();
const __dirname = path.resolve();
const rfsStream = rfs.createStream("log.txt", {
  size: "10M",
  interval: "1d",
  compress: "gzip",
});
rfs.createStream("logs.json", { size: "10M", interval: "1d", mode: "" });

app.use(morgan(logger, { stream: rfsStream }));
app.use(errorhandler());
app.use(cors(options));
app.use(express.static(path.join(__dirname, "..", "build")));
app.get("/", (req, res) => {
  res.send({ statusbar });
});
app.use("/api", express.json());
app.use("/api/", routes);
app.use("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.setHeader("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/images", express.static("./public/uploads"));

app.use("/*", function (req, res) {
  const url = __dirname.replace("/api", "");
  console.log(`${url}/build/index.html`);
  res.sendFile(`${url}/build/index.html`, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//frontend build server for reverse-proxy with nginx server
app.listen(8989, () =>
  console.log(`Listening on http://localhost:${8989}/`)
);

//data server provide handling requests and data
app.listen(
  {
    host: process.env.REMOTE_HOST,
    port: process.env.DATA_PORT,
  },
  () =>
    console.log(
      `Listening on http://${process.env.REMOTE_HOST}:${process.env.DATA_PORT}/`
    )
);
export default routes;
