/// <reference types="Cypress" />

context('Run a sample test suite', () => {
    it('Sample Testcase', () => {
        cy.visit('http://localhost:3000/');
    });
});
