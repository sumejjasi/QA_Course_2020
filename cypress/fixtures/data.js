let D = exports;

D.user = {
    username: 'sumejja',
    password: 'Test123!',
    id: 'e5820cfa-a138-46d1-b932-0ca18f473efe'
}

D.books = {
    programmingJS: {
        title: 'Programming JavaScript Applications',
        id: '9781491950296'
    }
}

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
    username: D.getRandomString(7),
    password: 'Test123!',
}


module.exports = D;