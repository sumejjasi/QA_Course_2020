const D = require('../fixtures/data');
const S = require('../fixtures/settings');

function request_with_JSON_data(httpMethod, baseUrl, urlSuffix, requestBody, log, propertyToSaveInLocalStorage, responseStatus) {

    cy.log(log);

    cy.getLocalStorage("headers").then(headers => {
        cy.request({
            url: baseUrl + urlSuffix,
            method: httpMethod,
            json: true,
            body: requestBody,
            headers: JSON.parse(headers)
        })
            .then(response => {

                if(responseStatus){
                    expect(response.status).equals(responseStatus);
                }

                if (propertyToSaveInLocalStorage) {
                    let propertyName;
                    let propertyValue = JSON.stringify(response.body);
                    propertyName = propertyToSaveInLocalStorage || '';

                    function isObject(variable) {
                        return Object.prototype.toString.call(variable) === '[object Object]'
                    }

                    if (isObject(propertyValue)) {
                        D[propertyName] = Object.assign(D[propertyName], JSON.parse(propertyValue));
                    } else {
                        D[propertyName] = JSON.parse(propertyValue);
                    }

                    cy.setLocalStorage(propertyName, propertyValue);
                    cy.log(log + propertyName);
                }
            });
    });
    return this;
}

exports.POST = function (baseUrl, urlSuffix, requestBody, log, propertyToSaveInLocalStorage, responseStatus) {
    request_with_JSON_data('POST', baseUrl, urlSuffix, requestBody, log, propertyToSaveInLocalStorage, responseStatus);
    return this;
};

exports.PUT = function (baseUrl, urlSuffix, requestBody, log, propertyToSaveInLocalStorage, responseStatus) {
    request_with_JSON_data('PUT', baseUrl, urlSuffix, requestBody, log, propertyToSaveInLocalStorage, responseStatus);
    return this;
};

exports.DELETE = function (baseUrl, urlSuffix, requestBody, log) {
    request_with_JSON_data('DELETE', baseUrl, urlSuffix, requestBody, log);
    return this;
};

exports.GET = function (baseUrl, urlSuffix, log, propertyToSaveInLocalStorage, responseStatus) {
    request_with_JSON_data('GET', baseUrl, urlSuffix, null, log, propertyToSaveInLocalStorage, responseStatus);
    return this;
};

exports.define_API_request_to_be_awaited = function (methodType, partOfRequestUrl, alias) {
    cy.server();
    cy.route(methodType, partOfRequestUrl + '**').as(alias);
    return this;
};

exports.wait_response_from_API_call = function (alias, status = 200) {
    cy.wait('@' + alias).its('status').should('eq', status);
    return this;
};