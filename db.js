

const authors = [
    {id:1, name: 'J.K. Rowling'},
    {id:2, name: 'George R.R. Martin'},
    {id:3, name: 'J.R.R. Tolkien'
    },
];

async function getAuthorById(authorId){
    return authors.find(author => author.id === authorId);
}

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const footerLinks = [
    {href: "/contact", text: "Contact"},
    {href: "/privacy", text: "Privacy Policy"},
    {href: "/terms", text: "Terms of Service"}
]

module.exports = {
    getAuthorById,
    links,
    footerLinks
};