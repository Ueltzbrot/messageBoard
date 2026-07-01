const {Router} = require("express");
const {getNew, postNew} = require("../controllers/newController");


const newRouter = Router();
newRouter.get("/", getNew);
newRouter.post("/", postNew);

module.exports = newRouter;