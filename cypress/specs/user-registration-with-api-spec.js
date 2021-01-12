const api = require('../api-utils/api-spec');
const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const S = require('../fixtures/settings');


context('API requests', () => {

    it('Creating a new user through the API', function()  {

       api.users.create_new_user(S.baseUrls.authApi, D.newUser);

    })
});