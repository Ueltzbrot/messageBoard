const {messages} = require("../db");

async function getIndex(req, res) {
    res.render("index", { message: "EJS rocks!", messages: messages  });
};


module.exports = {
    getIndex,
};