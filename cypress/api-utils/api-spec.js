let auth = require ('./endpoints/auth');
let template = require ('./endpoints/template-api-folder/collection');
let books = require ('./endpoints/books/collection');
let users = require ('./endpoints/users/collection');

module.exports = {
    auth : auth,
    template : template,
    books : books,
    users: users
}