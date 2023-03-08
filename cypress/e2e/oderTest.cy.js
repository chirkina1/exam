import * as user from '../fixtures/user.json';
import {loginViaUI} from '../support/helper';
import { faker } from '@faker-js/faker';



user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.city = faker.address.city();
user.address = faker.address.streetAddress("####");
//user.postCode = faker.address.postCode;
user.userName = faker.internet.userName();
user.postCode = faker.datatype.number({
    'min': 1,
    'max': 100
});
user.number = faker.datatype.number({ min: 1000000000 }); 
user.state = faker.address.state();
user.cardNumber = faker.datatype.number({ min: 1000000000000000 })


it('Order', () => {

    loginViaUI(user);

    cy.get('[style="left: 0px; width: calc((25% - 22.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((25% - 22.5px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span').click();

    cy.get('button[routerlink="/basket"]').click();

    cy.get('#checkoutButton').click();

    cy.get('button[routerlink="/address/create"]').click();

    cy.get('#mat-input-3').type(user.city);
    cy.get('#mat-input-4').type(user.firstName);
    cy.get('#mat-input-5').type(user.number);
    cy.get('#mat-input-6').type(user.postCode);
    cy.get('#address').type(user.address);
    cy.get('#mat-input-8').type(user.city);
    cy.get('#mat-input-9').type(user.state);

    cy.get('button[id="submitButton"]').click();

    cy.get(':nth-child(2) > .cdk-column-Selection').click();

    cy.get('.btn-next').click();

    cy.get(':nth-child(2) > .cdk-column-Selection').click()

    cy.get('.nextButton').click();

    cy.get('.mat-expansion-panel-header').eq(0).click();

    cy.get('#mat-input-10').type(user.firstName);
    cy.get('#mat-input-11').type(user.cardNumber);

    //cy.get('.mat-form-field.ng-tns-c119-28 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').select();

    cy.get('#mat-input-12').select('1')

    cy.get('#mat-input-13').select('2084')

    cy.get('#submitButton > .mat-button-wrapper').click();

    cy.get(':nth-child(2) > .cdk-column-Selection').click();

    cy.get('#submitButton > .mat-button-wrapper').click();

    cy.get('.mat-radio-container').eq(0).click();

    cy.get('.nextButton').click();

    cy.get('#checkoutButton').click();


    cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation').should('contain', 'Thank you for your purchase!')

})