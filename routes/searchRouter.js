const { Router } = require("express");
const searchRouter = Router();
const { searchName } = require("../controllers/searchController");

searchRouter.get("/", searchName);

module.exports = searchRouter;