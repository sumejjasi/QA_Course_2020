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
    password: 'Test12345.'
}

D.customerInformation = {
    firstName: D.getRandomString(5),
    lastName : D.getRandomString(5),
    cityName: D.getRandomString(),
    postalCode: D.getNewRandomNumber(),

}

D.product = {
    name: 'Panasonic HC-VX870K 4K Ultra HD Camcorder',

}



module.exports = D;
