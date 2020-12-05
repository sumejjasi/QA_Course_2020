let S = exports;

S.baseUrls = {
    admin: 'https://admin-demo.virtocommerce.com/',
    portal: 'https://demo.virtocommerce.com/',
    api: 'https://admin-demo.virtocommerce.com/api/',
};

S.accounts={
    admin:{
        username: 'admin',
        password: 'store'
    }
}

S.devices = {
    iPhoneX: {
        name : 'iPhone X',
        width: 375,
        height: 812
    },
    Pixel2: {
        name : 'Pixel 2',
        width: 411,
        height: 731
    },
    desktop: {
        name : 'Desktop',
        width: 1200,
        height: 700
    }
};

S.getSelectedResolution = function () {
    return S.selectedResolution;
};

S.catalogs =  {
    electronics: {
        id: "4974648a41df4e6ea67ef2ad76d7bbd4"
    }
};

S.selectedResolution = S.devices.desktop;

module.exports = S;