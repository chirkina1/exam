import * as user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import { openMainPage } from '../support/helper';


user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.city = faker.address.city();
user.address = faker.internet.address;
user.postCode = faker.address.zipCode();
user.userName = faker.internet.userName();
user.password = faker.internet.password(15);
 



it('Registratio and Autorization', () => {


  openMainPage();
  
  cy.log('Click on Account')
  cy.get('#navbarAccount').click();

  cy.log('Click on Login')
  cy.get('#navbarLoginButton').click();

  cy.log('Click on Not yet a customer')
  cy.get('a[href="#/register"]').click();


  cy.get('.mat-form-field-infix input[id="emailControl"]').type(user.email);

  cy.get('.mat-form-field-infix input[id="passwordControl"]').type(user.password);
  cy.get('.mat-form-field-infix input[id="repeatPasswordControl"]').type(user.password);
  cy.get('.mat-select-trigger').click();
  //cy.get('#mat-select-value-5').click();
  cy.get('#mat-option-3 > .mat-option-text').click()

  cy.get('.mat-form-field-infix input[id="securityAnswerControl"]').type(user.lastName);

  cy.get('#registerButton').click();


  cy.log('Authorize user');
 
  cy.get('input[id="email"]').type(user.email);
  cy.get('input[id="password"]').type(user.password);

  cy.get('button[id="loginButton"]').click();


  cy.log('Click on Account')
  cy.get('#navbarAccount').click();

  cy.get('button[aria-label="Go to user profile"]')
  .should('be.visible')

})