describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')  // el base url esta definido en el config de cypress
  })

  it('Contains correct header text', () => {
    cy.get("[data-test='fundamentals-header']").contains(/Testing Fundamentals/i)
    cy.get("[data-test='fundamentals-header']").should("contain.text", "Testing Fundamentals")
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i)  // con un commando de cypress escrito en cypress/support/commands.js
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i).should("contain.text", "Testing Fundamentals")// realiza lo mismo que arriba, pero lo abstrae
  })

  it("Accordion shows only when lcicked", ()=> {
    cy.contains(/Your tests will exist in a describe/i).should("not.be.visible")
    cy.get('[data-test="accordion-item1"] [role="button"]').click()
    cy.contains(/Your tests will exist in a describe/i).should("be.visible")
    cy.get('[data-test="accordion-item1"] [role="button"]').click()
    cy.contains(/Your tests will exist in a describe/i).should("not.be.visible")
    
  })
})