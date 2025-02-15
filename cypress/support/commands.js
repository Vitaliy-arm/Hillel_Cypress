// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    
        cy.get('button')
        .contains('Sign In')
        .should('be.visible')
        .click();

        cy.get('.modal-title')
        .contains('Log in')
        .should('be.visible');

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password, {sensitive: true});

        cy.get('button')
        .contains('Login')
        .should('be.visible')
        .click();

        cy.url().should('include', '/panel/garage');
        cy.get('button')
        .contains('Add car')
        .should('be.visible');
    
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })