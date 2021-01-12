let D = require('../../../fixtures/data');

exports.generate_payload_for_adding_new_user = function (newUser) {
    let body;

    body = {
        "userName": newUser.username,
        "password": newUser.password
    }

    return body;
}