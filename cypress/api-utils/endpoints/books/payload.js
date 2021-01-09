let D = require('../../../fixtures/data');

exports.generate_payload_for_adding_book_to_the_collection = function (userId, bookId) {
    let body;

    body = {
        "userId": userId,
        "collectionOfIsbns":
            [{"isbn": bookId}]
    }

    return body;
}