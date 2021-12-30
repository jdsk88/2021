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

const app = express();
app.use(morgan(logger));
app.use(errorhandler());
app.use(cors(options));
app.use("/images", express.static("./public/uploads"));
app.use("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.setHeader("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", express.json());
app.get("/", (req, res) => {
  res.send({ statusbar });
});
app.use("/api/", routes);

app.use("*", (req, res) => {
  res.status(404).json({
    success: req.complete,
    message: `Cannot /${req.method} ${req.protocol}://${req.hostname}:${PORT2}${req.originalUrl} from ${req.ip}`,
    error: {
      statusCode: res.statusCode,
      message: `Not found path ${req.originalUrl}`,
    },
  });
});

var httpsServer = https.createServer(
  {
    key: fs.readFileSync("./cert/key.pem"),
    cert: fs.readFileSync("./cert/cert.pem"),
  },
  app
);
httpsServer.listen(process.env.PORT);
console.log(`Listening on https://${process.env.HOST}:${process.env.PORT}/`);

export default routes;
