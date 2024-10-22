class ResetPass {
  visit(){
    cy.visit(Cypress.env('url'));
  }
  
  forgetPassword(){
    cy.contains('Forgot Password?').click();
  }

  enterEmail(email = Cypress.env('email')){
    cy.get('input').type(email);
  }

  submitEmail(){
    cy.contains('Submit').click();
  }

  fetchAndEnterOtpFromMail(){
    cy.mailslurp()
    .then(mailslurp => 
      mailslurp.waitForLatestEmail(Cypress.env('InboxID'), 60000))
    .then(email => {
      const otpCode = email.body.match(/\d{6}/)[0];
      cy.log(`OTP fetched : ${otpCode}`);
      Cypress.env('otp', otpCode);
      cy.log(Cypress.env('otp'));
      cy.contains('Please enter the received OTP to proceed.', {timeout: 10000}).should('exist');
      cy.get('.m-8fb7ebe7').first().type(Cypress.env('otp'));
    });
  }

  verifyOtp(){
    cy.contains('Verify OTP').click();
  }

  enterNewPassword(password = Cypress.env('pass')){
    cy.get('input').type(password);
  }

  submitNewPassword(){
    cy.contains('Submit').click();
  }
}

export default new ResetPass();
