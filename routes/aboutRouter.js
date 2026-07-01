
const {Router} = require("express");
const {getAbout} = require("../controllers/aboutController");

const aboutRouter = Router();

aboutRouter.get("/", getAbout);

module.exports = aboutRouter;