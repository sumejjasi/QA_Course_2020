let C = exports;
let helper  = require('../support/e2e-helper')


C.labels = {
    successfulOrder: {
     //   order: 'Order CO201204-'
        order: 'Order CO' + helper.currentDate
    }

}


module.exports = C;
