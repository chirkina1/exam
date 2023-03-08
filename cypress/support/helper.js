export function loginViaUI(user){
    openMainPage();
  
    cy.log('Click on Account')
    cy.get('#navbarAccount').click();
  
    cy.log('Click on Login')
    cy.get('#navbarLoginButton').click();
  
    cy.log('Authorize user');
   
    // cy.get('input[id="email"]').type('test@gmail.com');
    // cy.get('input[id="password"]').type('12345qwert');
  
    cy.get('input[id="email"]').type(user.email);
    cy.get('input[id="password"]').type(user.password); 

    cy.get('button[id="loginButton"]').click();

    

}

export function openMainPage(){
    cy.log('Open home page')
    cy.visit('/');
  
    cy.get('.close-dialog').click();


}

export function searchItem(user){

    loginViaUI(user);

    cy.get('.mat-search_icon-search')
    .click()

    cy.get('.mat-toolbar-row  .mat-form-field-wrapper')
    .type('apple{enter}');


}
