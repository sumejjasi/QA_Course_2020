let C = exports;

C.buttons = {
    signIn: 'Sign In',
    logIn: 'Log in',
    postpone: 'Postpone',
    add: 'Add',
    import: 'Import',
    create: 'Create',
    ok: 'Ok',
    startImport: 'Start import',
};

C.adminMenu = {
    more: 'More',
    home: 'Home',
    catalog: 'Catalog',
};

C.validationMsgs = {
    invalidCredentials_portal: 'Login attempt failed.'
};

C.placeholders = {
    select: 'Select ...'
};

C.labels = {
    catalog: {
        electronics: 'Electronics'
    },
    new_category_item: {
        physicalProduct: 'Physical Product',
    },
    importCatalog: {
        csvColumnDelimeter: {
            space: 'Space',
            comma: 'Comma',
        },
        virtoCommerceCSVImport: 'VirtoCommerce CSV import',
        mapColumns: 'Map columns',
        importFinished: 'Import finished successfully'
    },
    physicalItemDetails: {
        searchIndexMissing: 'Search index missing',
    },
    searchIndexDetails: {
        buildIndex: 'Build Index',
        indexationCompleted: 'Indexation completed successfully',
    },
};

module.exports = C;