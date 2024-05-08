describe("Various examples", ()=> {
    beforeEach(() => {
        cy.visit("/examples")
    })

    it("Multipage testing", ()=> {
        cy.getDataTest("navItem0").click()
        cy.location("pathname").should("equal", "/")
        
        cy.getDataTest("navItem1").click()
        cy.location("pathname").should("equal", "/overview")
    
    })

    it("Intercept test", ()=> {
        cy.intercept("POST", "http://localhost:3000/examples", {
                fixture: "example.json"  // nombre del archivo fixture con mock data que se va a retornar en vez de la respuesta de la API
            })

            cy.getDataTest("post-button").click()
    })
    
    it.only("Whitin test", () => {
        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 0)

        })
        cy.getDataTest("grudge-input").within(() => {
            cy.get("input").type("something something!")
            
        })
        cy.getDataTest("grudge-button").click()

        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 1)
            cy.get("li").its(0).should("contain", "something")
        })
        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").as("list").within(() => {
                cy.get("button").click()
               
            })
            cy.get("@list").should("have.length", 0)
        })
    })

})