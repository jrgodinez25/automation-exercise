// Define a test suite for New User Registration and Login Verification
describe('New User Registration and Login Verification', () => {

  // Define a 'user' object with unique email using timestamp to avoid duplicates
  const user = {
    name: 'Test User',
    email: `test${Date.now()}@email.com`, // Ensures a unique email on every test run
    password: 'Test1234'
  };

  // Define a single test case that handles registration, logout, and login
  it('should register a new user and login successfully', () => {
    
    // Visit the homepage of the Automation Exercise website
    cy.visit('https://automationexercise.com/');

    // Click the "Signup / Login" link to go to the signup/login page
    cy.contains('Signup / Login').click();

    // Type the user's name into the signup name input field
    cy.get('[data-qa="signup-name"]').type(user.name);

    // Type the unique email into the signup email input field
    cy.get('[data-qa="signup-email"]').type(user.email);

    // Click the signup button to start the registration process
    cy.get('[data-qa="signup-button"]').click();

    // ===== Fill out the full registration form =====

    // Select the gender (Mr. = id_gender1)
    cy.get('#id_gender1').check();

    // Type the password into the password input field
    cy.get('#password').type(user.password);

    // Select a birth date (Day, Month, Year)
    cy.get('#days').select('10');
    cy.get('#months').select('April');
    cy.get('#years').select('1990');

    // Fill in first name and last name
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');

    // Fill in address details
    cy.get('#address1').type('123 Main Street');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Ontario');
    cy.get('#city').type('Toronto');
    cy.get('#zipcode').type('A1A1A1');

    // Fill in mobile number
    cy.get('#mobile_number').type('1234567890');

    // Click the "Create Account" button
    cy.get('[data-qa="create-account"]').click();

    // Verify that the "Account Created!" message appears
    cy.contains('Account Created!').should('be.visible');

    // Click the "Continue" button after account creation
    cy.contains('Continue').click();

    // Confirm the user is logged in by checking for the logged-in username
    cy.contains(`Logged in as ${user.name}`).should('be.visible');

    // ===== Logout to test login again =====

    // Click the logout button
    cy.contains('Logout').click();

    // Click "Signup / Login" again to go back to the login form
    cy.contains('Signup / Login').click();

    // ===== Log in again using the registered credentials =====

    // Enter the email used during signup
    cy.get('[data-qa="login-email"]').type(user.email);

    // Enter the same password used during signup
    cy.get('[data-qa="login-password"]').type(user.password);

    // Click the login button
    cy.get('[data-qa="login-button"]').click();

    // Confirm the user is logged in again
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  });
});
