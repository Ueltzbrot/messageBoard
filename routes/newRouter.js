const {Router} = require("express");
const {postNew, usersListGet, usersCreateGet, usersCreatePost, usersUpdateGet, usersUpdatePost, usersDeletePost} = require("../controllers/newController");

const newRouter = Router();
newRouter.post("/", postNew);
newRouter.get("/", usersListGet);
newRouter.get("/create", usersCreateGet);
newRouter.post("/create", usersCreatePost);
newRouter.get("/:id/update", usersUpdateGet);
newRouter.post("/:id/update", usersUpdatePost);
newRouter.post("/:id/delete", usersDeletePost);


module.exports = newRouter;