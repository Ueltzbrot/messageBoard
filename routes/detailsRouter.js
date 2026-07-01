const {Router} = require("express");
const detailsRouter = Router();

const { getDetails } = require("../controllers/detailsController");

detailsRouter.get("/:id", getDetails);

module.exports = detailsRouter;