const { messages } = require("../db");
const usersStorage = require("../storages/userStorage");
const { body, validationResult, matchedData } = require("express-validator");
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const currentLength = messages.length;

async function postNew(req, res) {
    const { text, user } = req.body;
    if (!text || !user) {
        res.status(400).send("Name and message are required");
        return;
    }   

    messages.push({ id: currentLength + 1, text, user, added: new Date() });
    res.redirect("/");
}

function usersListGet(req, res) {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
}

function usersCreateGet(req, res) {
  res.render("form", {
    title: "Create user",
  });
}

const validateUser = [
  body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
  body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
  body("email").trim()
    .isEmail().withMessage("Email must be valid pauline"),
  body("age").trim()
  .isInt({ min: 0, max: 120 }).withMessage("Age must be a valid number between 0 and 120"),
  body("bio").trim()
    .isLength({ min: 0, max: 200 }).withMessage("Bio must be between 0 and 200 characters"),
];

// We can pass an entire array of middleware validations to our controller.
const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = matchedData(req);
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

function usersUpdateGet(req, res) {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = matchedData(req);
    usersStorage.updateUser(req.params.id, { firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

const usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

module.exports = {
    postNew,
    usersListGet,
    usersCreateGet,
    usersCreatePost,
    usersUpdateGet,
    usersUpdatePost,
    usersDeletePost
};
