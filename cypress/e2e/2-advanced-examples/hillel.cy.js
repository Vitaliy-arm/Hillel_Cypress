
describe('Робота з користувачами', () => {
    it('Открыть сайт Hillel', () => {
        cy.visit('/');
      });
    
      it('Клик на "Курси"', () => {
        cy.get('button[data-dropdown-trigger="coursesMenu"]').click('button[data-dropdown-trigger="coursesMenu"]');
    });
    
      it('Ввод названия курса "Сертифікація" в поле "Пошук по курсам"', () => {
        cy.get('.search-field_input').type('Сертифікація')
      });
    
      it('Ожидание поиска', () => {
        cy.wait(2000); 
      });
    
      it('Проверка результата поиска по слову "Сертифікація"', () => {
        cy.url().should('a[href="https://ithillel.ua/courses/qa-certification"]');
      });
  });