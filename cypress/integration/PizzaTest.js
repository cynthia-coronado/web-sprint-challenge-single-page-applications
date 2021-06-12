describe('Pizza maker test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaRedirect = () => cy.get('button[id=redirect]')
    const submitBtn = () => cy.get('button[id=submit]')
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const olivesInput = () => cy.get('input[name=olives]')
    const jalapenosInput = () => cy.get('input[name=jalapenos]')
    const mushroomsInput = () => cy.get('input[name=mushrooms]')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('Elements showing on page', () => {
        pizzaRedirect().should('exist')
        pizzaRedirect().click()
        nameInput().should('exist')
        submitBtn().should('exist')
        sizeInput().should('exist')
        pepperoniInput().should('exist')
        olivesInput().should('exist')
        jalapenosInput().should('exist')
        mushroomsInput().should('exist')
        instructionsInput().should('exist')

    })
    it('Functionality of inputs', () => {
        pizzaRedirect().click()
        nameInput()
            .type('Kristen Bell')
            .should('have.value', 'Kristen Bell')

        sizeInput()
            .select('personal')
            .should('have.value', 'personal')

        jalapenosInput()
            .click()
            .should('have.value', 'on')

        mushroomsInput()
            .click()
            .should('have.value', 'on')

        instructionsInput()
            .type('Extra cheese please!')
            .should('have.value', 'Extra cheese please!')
    })
})
