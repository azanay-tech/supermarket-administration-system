/// <reference types="Cypress" />

context('Run a sample test suite', () => {
    it('Sample Testcase', () => {
        cy.visit('/');
        cy.getByTestId('app_container').should('have.length', 1);
        cy.getByTestId('link_block').should('have.length', 4);
    });
});
