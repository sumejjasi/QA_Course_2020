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

D.getRandomEmail = function () {
    let randomEmail = D.getRandomString(5) + '@gmail.com'
    return randomEmail;
};

D.getNewProductData = function(){
    return D.newProduct = {
        SKU : D.getRandomString(10),
        name: 'product_' + D.getNewRandomNumber()
    }
};

// object with properties
D.newUser = {
    firstName: 'TestFirst',
    lastName : 'TestL',
    username: D.getRandomString(5),
    email: D.getRandomEmail(),
    password: 'Test12345.',
    address: D.getRandomString(5),
    city: 'Sarajevo',
    zipCode: '71000',
    country: 'string:BIH'

}

D.product = {
    name: 'ASUS ZenFone 2 ZE551ML 16GB Smartphone'
}


module.exports = D;
