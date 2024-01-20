Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check DemoQa elements module', () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/elements");
    });
    
    it('Check text-box module', () => {
        cy.get('#item-0').click();
        cy.get('#userName').click().type('Name').should('have.value', 'Name');
        cy.get('#userEmail').click().type('sample@gmail.com').should('have.value', 'sample@gmail.com');
        cy.get('#currentAddress').click().type('Current Address').should('have.value', 'Current Address');
        cy.get('#permanentAddress').click().type('Permanent Address').should('have.value', 'Permanent Address');
        cy.get('#submit').click().then(() => {
            cy.get('#output>div>p').should('be.visible').and('have.length', 4);
        });
    });

    it('Check radio buttons', () => {
        cy.get('#item-2').click();
        cy.get('[type="radio"]').then((radioButtons) => {
            cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked');
            cy.get('.row p').should('be.text', 'You have selected Yes');
            cy.wrap(radioButtons).eq(1).check({force:true}).should('be.checked');
            cy.get('.row p').should('be.text', 'You have selected Impressive');
            cy.wrap(radioButtons).eq(0).should('not.be.checked');
            cy.wrap(radioButtons).eq(2).should('be.disabled');
        });
    });

    it('Check buttons module', () => {
        cy.get('#item-4').click();
        cy.get('#doubleClickBtn').dblclick().then(() => {
            cy.get('#doubleClickMessage').should('exist').and('have.text', 'You have done a double click');
        });
        cy.get('#rightClickBtn').rightclick().then(() => {
            cy.get('#rightClickMessage').should('exist').and('have.text', 'You have done a right click');
        });
        cy.get('[type=button]').last().click().then(() => {
            cy.get('#dynamicClickMessage').should('exist').and('have.text', 'You have done a dynamic click');
        });
    });
});