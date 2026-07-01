
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const db = require('../db');

async function getAuthorById(req, res){
    const {authorId} = req.params;
    const author = await db.getAuthorById(parseInt(authorId));
    if(!author){
        throw new CustomNotFoundError(`Author with id ${authorId} not found`);
    }
    res.send(`${author.name}`);
}

module.exports = {
    getAuthorById,
};