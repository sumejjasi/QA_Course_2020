const api_request_generator = require('../../api-request-generator');
const payload = require('./payload');

// sample request for creating 'dummyItem'
exports.create_dummy_item = function (status) {

    api_request_generator.POST(
        'catalog/dummyItem',
        payload.generate_payload_for_dummy_item(),
        'New dummyItem created via API',
        'dummyItem',
        status
    );
};
