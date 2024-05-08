describe("From test", ()=> {
    beforeEach(()=>{
        cy.visit("/forms")
    })

    it("Test subscribe form", ()=>{
        cy.contains(/testing forms/i)
        cy.getDataTest("email-input").as("emailInput")
        cy.get("@emailInput").type("test@test.com")
        cy.get('.MuiButton-root').click()
        cy.contains(/Successfully subbed/i).should("be.visible")
        cy.wait(3000)
        cy.contains(/Successfully subbed/i).should("not.exist")

        cy.get("@emailInput").clear().type("test2@test.casd")
        cy.contains(/invalid/i).should("not.exist")
        cy.get('.MuiButton-root').click()
        cy.contains(/invalid/i).should("exist")
        cy.wait(3000)
        cy.contains(/invalid/i).should("not.exist")


    })
})