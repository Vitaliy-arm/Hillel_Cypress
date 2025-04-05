import RegistrationPage from './cy_hw4_methods.js';

let nameQA, lastNameQA, emailQA, passQA;
let mileage = 4500;
let liters = 100;
let totalCost = 10000;


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


describe('Add cars and fuel expenses', () => {
  it('Add', () => {
      cy.login(emailQA, passQA)
      cy.intercept('POST', '/api/cars').as('addCar');
      RegistrationPage.add_car('BMW', 'X5', 200);

      // cy.wait('@addCar').then((addedCar) => {
      //   expect(addedCar.response.statusCode).to.equal(201);
      //   expect(addedCar.response.body.data).to.have.property('id');
      //   cy.wrap(addedCar.response.body.data.id).as('carId');
      // });

      // cy.get('@carId').then((carId) => {
      //   cy.log(`Car ID: ${carId}`);

      //   cy.request('GET', '/api/cars').then((response) => {
      //     expect(response.status).to.equal(200);
      //     const foundCar = response.body.data.find(car => car.id === carId);
      //     expect(foundCar.id).to.equal(carId);
      //   });

      //   cy.Creates_an_expense(carId, mileage, liters, totalCost);
      //   RegistrationPage.go_to_Fuel_expenses(mileage);
      // });

  });

});

