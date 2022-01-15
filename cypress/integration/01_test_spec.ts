/// <reference types="Cypress" />

context('Run a sample test suite', () => {
    it('Sample Testcase', () => {
        cy.visit('/');
        cy.get('[data-testid="app_container"').should('have.length', 1);
        cy.get('[data-testid="link_block"').should('have.length', 4);
    });
});
