describe('Testing the pokedex page', () => {
  it('Visits the pokedex page and looks for certain pokemon', () => {
    cy.visit('/pokedex/pokemon');
    cy.contains('pokedex');
  });
});
