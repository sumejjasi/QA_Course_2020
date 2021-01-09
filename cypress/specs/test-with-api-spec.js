const api = require('../api-utils/api-spec');
const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');

context('API requests', () => {

    it('Deleting books through the API', function()  {

        api.auth.get_token()
        api.books.delete_all_books_from_the_collection(D.user)
        api.books.add_book_to_the_collection(D.user.id, D.books.programmingJS.id)

    })
});