
describe('Робота з користувачами', () => {
  it('Открыть сайт Hillel', () => {
    cy.visit('/');
    cy.get('button[data-dropdown-trigger="coursesMenu"]').click();
    cy.get('.search-field_input').type('Сертифікація', { delay: 100 });
    cy.wait(2000);
    cy.get('.course-label.-alt[href="https://ithillel.ua/courses/qa-certification"]').should('be.visible');

  });


  // it('Клик на "Курси"', () => {
  //   cy.visit('/');
  //   cy.get('button[data-dropdown-trigger="coursesMenu"]').click();
  // });

  // it('Ввод названия курса "Сертифікація" в поле "Пошук по курсам"', () => {
  //   cy.visit('/');
  //   cy.get('.search-field_input').type('Сертифікація')
  // });

  // it('Ожидание поиска', () => {
  //   cy.visit('/');
  //   cy.wait(2000); 
  // });

  // it('Проверка результата поиска по слову "Сертифікація"', () => {
  //   cy.visit('/');
  //   cy.url().should('a[href="https://ithillel.ua/courses/qa-certification"]');
  // });
});