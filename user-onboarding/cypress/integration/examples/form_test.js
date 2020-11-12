

describe("User-Onboarding app", () => {
    beforeEach(() => {
        // arbitrary code you want running before your tests start: setup
        cy.visit("http://localhost:3000/");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const submitButton = () => cy.get('button')
    const checkBox = () => cy.get('input[name="termsOfService"]')
    // const radioButton = () => cy.get('input[name="title"]')
    const nameValidationError = () => cy.get('div[class="errors"]');


    // here go our tests
    // 'it' is a test
    it("sanity test to make sure tests work", () => {
        // 'expect' is an assertion
        // there can be many assertions per test
        // assertions live inside the 'it' statement
        // assertions should be logically grouped together
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    });

    it("the proper elements are showing on the screen", () => {
        nameInput().should("exist");
        cy.get('input[name="xxxxx"]').should("not.exist");
        emailInput().should("exist");
        cy.get('input[email="email]').should("not.exist");
        passwordInput().should("exist")
        cy.get('input[password="password]').should("not.exist");
    })

    it("Name/email/password testing", () => {
        // covers name test
        nameInput()
            .should("have.value", "")
            .type("Enter your name here")
            .should("have.value", "Enter your name here");
        //covers email test
        emailInput()
            .should('have.value', "")
            .type('Enteryouremail@enter.com')
            .should("have.value", "Enteryouremail@enter.com")
        // covers password test
        passwordInput()
            .should("have.value", "")
            .type('Password')
            .should("have.value", "Password")
    })
    it("Check box tests", () => {
        checkBox()
            .should('exist')
            .click();
    })

    it("Submit button tests", () => {
        submitButton()
            .should('exist')
            .should('be.disabled')
    })


    // it("Radio button tests", () => {
    //     radioButton()

    // })
    it('Validation error test', () => {
        nameInput()
            .type('Doug')
            cy.contains("name must be longer then 5 characters").should("exist");
        // nameValidationError()
        //     .should('exist')
    })
});