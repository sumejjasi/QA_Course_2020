const api_request_generator = require('../../api-request-generator');
const payload = require('./payload');

exports.delete_all_books_from_the_collection = function (user) {

    api_request_generator.DELETE(
        'Books?UserId=' + user.id,
        null,
        'Deleting all books from the collection via the API'
    );
};

exports.add_book_to_the_collection = function (userId, bookId) {

    api_request_generator.POST(
        'Books',
        payload.generate_payload_for_adding_book_to_the_collection(userId, bookId),
        'Adding book with id '+ bookId + ' to the collection via the API, for user with ID ' + userId
    )
};
