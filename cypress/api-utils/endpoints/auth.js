const S = require('../../fixtures/settings');
const D = require('../../fixtures/data');

exports.get_token = function () {
    cy.request(
        {
            url: S.baseUrls.authApi + 'GenerateToken',
            form: true,
            method: 'POST',
            body: {
                userName: D.user.username,
                password: D.user.password
            }
        }
    ).then(response => {

        cy.log('Logging in through the API');

        let headers = {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + response.body.token,
        };

        cy.setLocalStorage("headers", JSON.stringify(headers));
    })
};
