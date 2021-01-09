const D = require('../data');
const S = require('../settings');
const E = exports;


E.generateDataFor_Catalog_Import = function (catalogObject) {

    E.productFields = [
        [
            "Sku",
            "Name",
            // etc.
        ],
        [
            catalogObject.SKU,
            catalogObject.name,
            // etc.
        ]
    ];

}


module.exports = E;