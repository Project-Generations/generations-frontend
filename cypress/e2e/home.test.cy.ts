describe('Home page test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Home');
  });
});
