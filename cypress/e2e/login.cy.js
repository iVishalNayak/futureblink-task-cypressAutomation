describe('Login Functionality - SalesBlink.io', () => {
  
    beforeEach(() => {
      cy.visit('https://run.salesblink.io/signin'); 
    });
  
    it('1- Verify successful login with valid credentials', () => {
      cy.get('input[name="email"]').type('bifiva9559@envoes.com'); 
      cy.get('input[name="password"]').type('Password!@#'); 
      cy.contains('button', 'Sign In').click();

  
      // Assertion: User should be redirected to the dashboard
      cy.url().should('include', '/dashboard'); 
      cy.get('h1').contains('Dashboard').should('be.visible');

    });
  
    it('2 - Verify login with invalid credentials', () => {
      cy.get('input[name="email"]').type('invaliduser@example.com');
      cy.get('input[name="password"]').type('WrongPassword');
      cy.contains('button', 'Sign In').click();
  
      // Assertion: Error message should be displayed
      cy.contains('p', 'correct login').should('be.visible');

    });
  
    it('3 - Verify security logout', () => {
      // Log in first
      cy.get('input[name="email"]').type('bifiva9559@envoes.com'); 
      cy.get('input[name="password"]').type('Password!@#'); 
      cy.contains('button', 'Sign In').click();
      
      // Perform logout
// Click on the dropdown button
cy.get('.dropdownBtn').eq(2).click();
cy.get('.dropdownMenuItem', { timeout: 10000 }).should('be.visible');
cy.contains('Sign Out').click({ force: true });


// Assertion: User should be redirected to the login page
cy.url().should('include', '/signin');
cy.contains('Sign In').should('be.visible');
      
     
    });
  
  });
  