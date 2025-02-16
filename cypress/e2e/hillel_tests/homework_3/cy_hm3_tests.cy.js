import RegistrationPage from './cy_hw3_methods.js';

let nameQA, lastNameQA, emailQA, passQA

if (Cypress.env('CYPRESS_BASE_URL') === 'https://guest:welcome2qauto@qauto.forstudy.space') {
  nameQA = Cypress.env('name');
  lastNameQA = Cypress.env('lastName');
  emailQA = Cypress.env('email');
  passQA = Cypress.env('password');
} else {
  nameQA = Cypress.env('testName');
  lastNameQA = Cypress.env('testLastName');
  emailQA = Cypress.env('testEmail');
  passQA = Cypress.env('testPassword');
};


describe('Registration', () => {
    beforeEach(() => {
      RegistrationPage.visit(Cypress.env('CYPRESS_BASE_URL'));
      RegistrationPage.openRegistrationForm();
    });

    it('Registration user', () => {
            RegistrationPage.fillName(nameQA);
            RegistrationPage.fillLastName(lastNameQA);
            RegistrationPage.fillEmail(emailQA);
            RegistrationPage.fillPassword(passQA);
            RegistrationPage.fillRepeatPassword(passQA);
    
            RegistrationPage.registration();
            // RegistrationPage.LogOut();
          });

});


describe('Add cars and fuel expenses', () => {
  it('Add', () => {
      cy.login(emailQA, passQA)
      RegistrationPage.add_car('BMW', 'X5', 200);
      RegistrationPage.add_fuel_expense(1000, 20, 5999);
    });

  // it('Add cars', () => {
  //   RegistrationPage.add_car('2: 3', '0: 2', 200);
  // });

  // it('Add fuel expenses', () => {
  //   RegistrationPage.add_fuel_expense(1000, 20, 5999);
  // });

});