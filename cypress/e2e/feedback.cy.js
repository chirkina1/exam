import { openMainPage } from "../support/helper"
import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json';





it('Customer Feedback form', () => {
    
openMainPage();

cy.get('button[aria-label="Open Sidenav"]').click();

cy.get('a[href="#/contact"]').click();

cy.get('#mat-input-1').should('have.value', 'anonymous')

cy.get('#comment').type(faker.random.alpha(10));

cy.get('[id="rating"]').type('{rightArrow}{rightArrow}{leftArrow}');

// cy.get('#rating').trigger('mousedown', { which: 1 }, { force: true })
// .trigger('mousemove', 881, 288, { force: true })
// .trigger('mouseup');

//cy.get('.mat-slider-wrapper').invoke('val','3').trigger('change');

// cy.get('.mat-slider-wrapper').as('#range').invoke('val', 4)
//   .trigger('change');

// cy.get('#rating')
// .invoke('val', 4)
// .trigger('change');

cy.get('#captcha').then( elem => {
    cy.log($elem.text());
  })



})