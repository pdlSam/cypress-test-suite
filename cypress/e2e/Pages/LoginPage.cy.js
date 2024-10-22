
const DASHBOARD_TEXT = 'Dashboard';
const ONBOARDING_PATH = '/onBoarding';
const DASHBOARD_PATH = '/dashboard';

class LoginPage {
  visit() {
    cy.visit(Cypress.env('url'));
  }

  enterEmail(email = Cypress.env('email')) {
    cy.get('input[type="text"]').type(email);
  }

  enterPassword(password = Cypress.env('pass')){
    cy.get('input[type="password"]').type(password);
  }

  login(){
    cy.get('button').contains('Login').click();
  }

  validateOnboardingPageUrl(){
    cy.url().should('include', ONBOARDING_PATH);
  }

  navigateToDashboard(){
    cy.contains(DASHBOARD_TEXT).click();
  }

  validateDashboardPageUrl(){
    cy.url().should('include', DASHBOARD_PATH);
  }
}

export default new LoginPage();