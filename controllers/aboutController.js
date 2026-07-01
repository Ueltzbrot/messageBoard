const { links, footerLinks } = require("../db");

async function getAbout(req,res){
    res.render("about", { message: "EJS rocks!",links: links, footerLinks: footerLinks  });
}

module.exports  = {
    getAbout,
};