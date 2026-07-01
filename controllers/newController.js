const { messages } = require("../db");

async function getNew(req, res) {
    res.render("form", { message: "EJS rocks!" });
}

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

module.exports = {
    getNew,
    postNew
};