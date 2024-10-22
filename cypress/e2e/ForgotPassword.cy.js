
import loginPage from '../e2e/Pages/LoginPage.cy.js'
import resetPassPage from '../e2e/Pages/ResetPass.cy.js'

describe('Forgot Password and Login', ()=>{ 

  it(' should allow a user to reset their password', ()=>{
    resetPassPage.visit();
    resetPassPage.forgetPassword();
    resetPassPage.enterEmail();
    resetPassPage.submitEmail();
    cy.wait(15000);
    resetPassPage.fetchAndEnterOtpFromMail();
    resetPassPage.verifyOtp();
    cy.wait(10000);
    resetPassPage.enterNewPassword();
    resetPassPage.submitNewPassword(); 
  });
    
  it('should allow user to login', ()=>{
    loginPage.visit();
    loginPage.enterEmail();
    loginPage.enterPassword();
    loginPage.login();
    loginPage.validateOnboardingPageUrl();
    loginPage.navigateToDashboard();
    loginPage.validateDashboardPageUrl();
  })
})


