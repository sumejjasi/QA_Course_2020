import '@testing-library/cypress/add-commands';
// *************************** ELEMENTS ***************************

export default class BasePage {

    constructor() {
    }

    // *************************** ACTIONS ***************************


    click(text) {
        cy.findByText(text).should('be.visible');
        cy.findByText(text).click();
        return this;
    }

    click_element_with_placeholder(placeholderText) {
        cy.findAllByPlaceholderText(placeholderText).eq(0).click();
        return this;
    }

    verify_element_is_selected(element) {
        element().should('be.checked');
        return this;
    }

    verify_element_is_visible(element) {
        element().should('not.be.visible');
        return this;
    }

    verify_element_is_not_visible(element) {
        element().should('be.visible');
        return this;
    }

    verify_text_is_visible(text) {
        cy.findByText(text).should('be.visible');
        return this;
    }

    verify_text(element, value) {
        element().should('contain', value);
        return this;
    }

    verify_value(element, value) {
        element().invoke('val').should('contain', value);
        return this;
    }

    wait_element_to_be_visible(element) {
        element().should('be.visible');
        return this;
    };

    wait_element_to_be_invisible(element) {
        element().should('not.be.visible');
        return this;
    };

    wait_all_elements_of_same_type_to_be_visible(elements) {
        elements().then(function (elms) {
            cy.log(`Waiting ${elms.length} elements to be visible`);

            for (let i = 0; i < elms.length; i++) {
                elements().eq(i).should('be.visible')
            }
        });
        return this;
    };


    log_title(test) {
        cy.log('                                                                                                ');
        cy.log('               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        cy.log('               ' + test.test.title);
        cy.log('               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        cy.log('                                                                                                ');

        return this;
    };

    upload_file(fileName) {
        uploadFileInput().attachFile('files/' + fileName);
        return this;
    }

    define_API_request_to_be_awaited(methodType, partOfRequestUrl, alias) {
        cy.server();
        cy.route(methodType, partOfRequestUrl + '**').as(alias);
        return this;
    };

    wait_response_from_API_call(alias, status = 200) {
        cy.wait('@' + alias).its('status').should('eq', status);
        return this;
    };

    press_ENTER(element) {
        element().type('{enter}');
        return this;
    };

    verify_email_arrives_to_specified_address(emailAccount, subject, content) {
        cy.task('fetchGmailUnseenMails', {
            username: emailAccount.email,
            password: emailAccount.password,
            markSeen: true
        }).then(mails => {

            var last_unread_email = mails[0];
            cy.log(JSON.stringify(last_unread_email));
            assert.isOk(last_unread_email.from === "do_not_reply@mytestdomain.com");
            assert.isOk(last_unread_email.subject === subject);
            assert.isOk(last_unread_email.body.includes(content));
        });
        return this;
    };

    navigate_to(url) {
        cy.visit(url);
        return this;
    };

    reload_page() {
        cy.reload();
        return this;
    };

}
