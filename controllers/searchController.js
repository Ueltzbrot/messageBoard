const usersStorage = require("../storages/userStorage");

function searchName(req, res) {
    const { search } = req.query;

    if (!search) {
        res.status(400).send("Searchname is required");
        return;
    }

    res.render("index", {
        title: "Search results",
        users: usersStorage.getUsers(),
        searchResults: usersStorage.getUsersByName(search),
    });
}

module.exports = {
    searchName
};