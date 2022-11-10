describe('This is the test for the tech test', () => {
    it('Will connect to the page', () => {
        cy.visit('https://protection.coincover.com/support');
    });
    it('Will test page content', () => {
      cy.get('#CoincoverApp > div > main > div > div > div > h3').contains('How can we help you?');
      cy.get('#CoincoverApp > div > main > div > div > div > h6').contains('Please fill in the details below, and one of our Customer Support team will be in touch shortly.');
    })
    it('Will fill in information', () => {
        cy.get('#contact-us-email-input').type('Test@test.com');
        cy.get('#contact-us-enquiry-description-input').type('This is a test please ignore!');
    })
    it('Will change drop down selection to sales', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > div:nth-child(4) > div').click();
        cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-9cctfg > ul > li:nth-child(1)').click();
    })
    it('Will click submit button', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > button').click();
    });
    it('Will test post submission page', () => {
        cy.get('h3').contains('Thanks!');
        cy.get('h6').contains('Thanks for contacting Coincover. Our Customer Support team will deal with your query and aim to get back to you within one working day.');
    })
    it('Will reconnect to the home page', () => {
        cy.visit('https://protection.coincover.com/support');
    })
    it('Will fill in information', () => {
        cy.get('#contact-us-email-input').type('Test@test.com');
        cy.get('#contact-us-enquiry-description-input').type('This is a test please ignore!');
    })
    it('Will change drop down selection to cancellation', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > div:nth-child(4) > div').click();
        cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-9cctfg > ul > li:nth-child(2)').click();
    })
    it('Will click submit button', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > button').click();
    });
    it('Will test post submission page and reconnect to the support page', () => {
        cy.get('h3').contains('Thanks!');
        cy.get('h6').contains('Thanks for contacting Coincover. Our Customer Support team will deal with your query and aim to get back to you within one working day.');
        cy.visit('https://protection.coincover.com/support');
    })
    it('Will fill in information', () => {
        cy.get('#contact-us-email-input').type('Test@test.com');
        cy.get('#contact-us-enquiry-description-input').type('This is a test please ignore!');
    })
    it('Will change drop down selection to Make a claim', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > div:nth-child(4) > div').click();
        cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-9cctfg > ul > li:nth-child(3)').click();
    })
    it('Will click submit button', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > button').click();
    });
    it('Will test post submission page and reconnect to the support page', () => {
        cy.get('h3').contains('Thanks!');
        cy.get('h6').contains('Thanks for contacting Coincover. Our Customer Support team will deal with your query and aim to get back to you within one working day.');
        cy.visit('https://protection.coincover.com/support');
    })
    it('Will fill in information', () => {
        cy.get('#contact-us-email-input').type('Test@test.com');
        cy.get('#contact-us-enquiry-description-input').type('This is a test please ignore!');
    })
    it('Will change drop down selection to Payment query', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > div:nth-child(4) > div').click();
        cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-9cctfg > ul > li:nth-child(4)').click();
    })
    it('Will click submit button', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > button').click();
    });
    it('Will test post submission page and reconnect to the support page', () => {
        cy.get('h3').contains('Thanks!');
        cy.get('h6').contains('Thanks for contacting Coincover. Our Customer Support team will deal with your query and aim to get back to you within one working day.');
        cy.visit('https://protection.coincover.com/support');
    })
    it('Will fill in information', () => {
        cy.get('#contact-us-email-input').type('Test@test.com');
        cy.get('#contact-us-enquiry-description-input').type('This is a test please ignore!');
    })
    it('Will change drop down selection to general enquiry', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > div:nth-child(4) > div').click();
        cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-9cctfg > ul > li:nth-child(5)').click();
    })
    it('Will click submit button', () => {
        cy.get('#CoincoverApp > div > main > div > div > div > button').click();
    });
    it('Will test post submission page and reconnect to the support page', () => {
        cy.get('h3').contains('Thanks!');
        cy.get('h6').contains('Thanks for contacting Coincover. Our Customer Support team will deal with your query and aim to get back to you within one working day.');
        cy.visit('https://protection.coincover.com/support');
    })
    it('Will input and incorrect email and attempt to submit', () => {
        cy.get('#contact-us-email-input').type('Not an email 123_!!! @ ');
    });

})