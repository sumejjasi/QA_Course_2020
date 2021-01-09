let auth = require ('./endpoints/auth');
let template = require ('./endpoints/template-api-folder/collection');
let books = require ('./endpoints/books/collection');

module.exports = {
    auth : auth,
    template : template,
    books : books,
}