const { messages } = require("../db");

async function getDetails(req, res) {
    const message = messages.find((m) => m.id === parseInt(req.params.id));
    if (!message) {
        res.status(404).send("Message not found");
        return;
    }
    res.render("details", { message });
}

module.exports = {
    getDetails
};