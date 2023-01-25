const config = require('../../vero.config.json');
describe('Veroprosenttilaskuri', () => {
  it('Veroprosentin tarkistus', () => {
    cy.visit('https://avoinomavero.vero.fi/?Language=FIN&Link=IITTaxRateCalc');

    cy.get('input[name="Dn-k"]')
      .type(config.city)
      .type('{enter}');
    
    cy.get('input[name="Dn-l"]')
      .type(config.religion)
      .type('{enter}');
  
    cy.get('input[name="Dn-m"]')
      .type(config.year_of_birth)
      .type('{enter}');

    cy.get('button[id=action_7]').click();

    cy.wait(800)

    cy.get('input[name="Dn-52"]')
      .type(""+Math.round(config.annual_income))

    cy.get('a[id="step_Dn-4"]').click();

    cy.wait(500);

    cy.get('input[name="Dn-7h"]')
      .invoke('val')
      .then(sometext => cy.task('log', "Veroprosentti: " + sometext));

    cy.get('input[name="Dn-8h"]')
      .invoke('val')
      .then(sometext => cy.task('log', "Lisäveroprosentti: " + sometext));
  });
});