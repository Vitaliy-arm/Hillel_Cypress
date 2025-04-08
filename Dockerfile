# Используем официальный образ Cypress
FROM cypress/included:14.2.1

# Устанавливаем рабочую директорию в контейнере
WORKDIR /e2e

# Копируем локальный проект в контейнер
COPY . /e2e

# Запускаем Cypress с указанными параметрами
CMD ["cypress", "run", "--env", "CYPRESS_BASE_URL=https://guest:welcome2qauto@qauto.forstudy.space", "--spec", "cypress/e2e/hillel_tests/homework_4/cy_hm4_tests.cy.js", "--browser", "chrome"]
