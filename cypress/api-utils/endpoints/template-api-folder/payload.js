let D = require('../../../fixtures/data');

exports.generate_payload_for_dummy_item= function () {
    let body;

    body = {
        // copy the request from browser console (Network Tab - Request Payload - View Source)
        // add random data and reference to Settings where needed so you can easily change that for other environment
        "name": D.getRandomString(10),
        "isActive": true,
        "catalogId": S.catalogs.electronics.id,
    };

    return body;
}