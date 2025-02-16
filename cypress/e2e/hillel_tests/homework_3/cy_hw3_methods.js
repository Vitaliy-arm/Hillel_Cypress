class RegistrationPage {
    
    visit(url) {
      cy.visit(url);
    }
  
    openRegistrationForm() {
      cy.get('button')
      .contains('Sign up')
      .should('be.visible')
      .click()
      .get('.modal-title')
      .contains('Registration')
      .should('be.visible');
    }

    fillName(name) {
        cy.get('input[name="name"]').type(name);
      }
    
      fillLastName(lastName) {
        cy.get('input[name="lastName"]').type(lastName);
      }
    
      fillEmail(email) {
        cy.get('input[name="email"]').type(email);
      }
    
      fillPassword(password) {
        cy.get('input[name="password"]').type(password), {sensitive: true};
      }
    
      fillRepeatPassword(password) {
        cy.get('input[name="repeatPassword"]').type(password), {sensitive: true};
      }
    
      registration() {
        cy.get('button')
        .contains('Register')
        .should('be.visible')
        .click();
      }

      add_car(brand, model, mileage){
        cy.get('button').contains('Add car').should('be.visible').click()
        .get('.modal-title').contains('Add a car').should('be.visible')
        .get('#addCarBrand').select(brand)
        .get('#addCarModel').select(model)
        .get('#addCarMileage').type(mileage, {delay: 100})
        .get('.modal-footer button.btn-primary').contains('Add').should('be.visible').click()
        .get('.icon').should('be.visible');
      }

      add_fuel_expense(newMileage, liters, cost){
        cy.get('button').contains('Add fuel expense').should('be.visible').click()
        .get('.modal-title').contains('Add an expense').should('be.visible')
        .get('#addExpenseMileage').should('be.visible').type('{selectall}{backspace}').type(newMileage, {delay: 100})
        .get('#addExpenseLiters').type(liters, {delay: 100})
        .get('#addExpenseTotalCost').type(cost, {delay: 100})
        .get('.modal-footer button.btn-primary').contains('Add').should('be.visible').click()
        .get('td').contains(newMileage).should('be.visible');
      }



}


export default new RegistrationPage();