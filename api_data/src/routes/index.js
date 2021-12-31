import express from "express";
import images from "./images.js";
import crypto from "./crypto.js";
const routes = express.Router({});

routes.use("/images", images);
routes.use("/crypto", crypto);

export default routes;
