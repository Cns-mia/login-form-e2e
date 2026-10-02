const validEmail = 'erdem.guntay@wit.com.tr';
const validPassword = 'Wit2024!sifre';

const emailError = 'Lütfen geçerli bir email adresi girin.';
const passwordError =
  'Şifre en az 8 karakter olmalı; büyük harf, küçük harf, rakam ve özel karakter içermelidir.';

describe('Login Formu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Başarılı senaryo', () => {
    it('Form doğru doldurulunca submit edip success sayfasını açabiliyorum', () => {
      cy.get('[data-cy="email-input"]').type(validEmail);
      cy.get('[data-cy="password-input"]').type(validPassword);
      cy.get('[data-cy="terms-input"]').check();
      cy.get('[data-cy="submit-button"]').should('be.enabled').click();

      cy.url().should('include', '/success');
      cy.get('[data-cy="success-page"]').should('be.visible');
    });
  });

  describe('Hatalı senaryolar', () => {
    it('Email yanlış girilince 1 hata mesajı görünüyor ve buton disabled kalıyor', () => {
      cy.get('[data-cy="email-input"]').type('yanlis-email');

      cy.get('[data-cy="error-message"]').should('have.length', 1);
      cy.contains(emailError).should('be.visible');
      cy.get('[data-cy="submit-button"]').should('be.disabled');
    });

    it('Email ve password yanlış girilince 2 hata mesajı görünüyor', () => {
      cy.get('[data-cy="email-input"]').type('yanlis-email');
      cy.get('[data-cy="password-input"]').type('1234');

      cy.get('[data-cy="error-message"]').should('have.length', 2);
      cy.contains(passwordError).should('be.visible');
      cy.get('[data-cy="submit-button"]').should('be.disabled');
    });

    it('Email ve password doğru ama şartlar kabul edilmeyince buton disabled kalıyor', () => {
      cy.get('[data-cy="email-input"]').type(validEmail);
      cy.get('[data-cy="password-input"]').type(validPassword);

      cy.get('[data-cy="error-message"]').should('have.length', 0);
      cy.get('[data-cy="submit-button"]').should('be.disabled');
    });
  });
});
