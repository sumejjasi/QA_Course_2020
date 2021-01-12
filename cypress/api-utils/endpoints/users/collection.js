const api_request_generator = require('../../api-request-generator');
const payload = require('./payload');


exports.create_new_user = function (baseUrl, newUser) {

    api_request_generator.POST(
        baseUrl,
        'User',
        payload.generate_payload_for_adding_new_user(newUser),
        'Created a new user'
    )
};
