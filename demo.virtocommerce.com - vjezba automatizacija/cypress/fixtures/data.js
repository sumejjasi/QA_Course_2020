let D = exports;

D.uuid = "uuid-"+((new Date).getTime().toString(16)+Math.floor(1E7*Math.random()).toString(16));
D.randomNumber = Math.floor(10000 * Math.random() + 1).toString();

D.getUUID = function () {
   let uuid = "uuid-"+((new Date).getTime().toString(16)+Math.floor(1E7*Math.random()).toString(16));
    return uuid;
};

D.getRandomString = function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};

D.getNewRandomNumber = function () {
    let randomNo = Math.floor(10000 * Math.random() + 1).toString();
    return randomNo;
};

D.getNewProductData = function(){
    return D.newProduct = {
        SKU : D.getRandomString(10),
        name: 'product_' + D.getNewRandomNumber()
    }
};

D.newUser = {
 firstName: 'AA',
 lastName: 'BB',
 email: D.getRandomString(5) + '@gmail.com',
 userName: D.getRandomString(5),
 password: 'Test123.'

}

D.getRandomEmail = function () {
     let randomEmail = D.getRandomString(5) + '@gmail.com'
     return randomEmail;
 };

D.product = {
    name: 'E-flite Carbon-Z Cub BNF Basic'
}

D.customerInformation = {
    email: D.getRandomString(5) + '@gmail.com',
    firstName: 'GG',
    lastName: 'FF',
    company: 'jfks',
    address: 'kdjfk',
    city: 'sa',
    zip: 'fkjd',
    phone: '987567',
}

module.exports = D;