# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

Стек технологий:
Vue 3 composition API
Pinia - управление состоянием
Vue Router - маршрутизация
SCSS - стилизация
Vite - сборщик проекта

Структура проекта
src/
assets/         # Картинки, шрифты, scss файлы
components/     # Vue-компоненты
components/cards    # Компоненты с карточками
components/common   # Дочерние компоненты
components/home     # Компоненты с главной сраници home
components/programs # Компоненты с дубль страниц
components/ui       # Кнопки, инпуты, иконки и так далее
constants/programs  # Константы c названиями путей для дубль страниц
content         # Весь текст с проекта
views/          # Страницы маршрутизатора vue-router
router/         # Маршруты
stores/         # Pinia store
stores/cardStore.js        # Данные карточек/блоков
stores/doublePagesStore.js # Сменяемые данные в дубль страницах
stores/formsStore.js       # Данные с форм
stores/modalsStore.js      # Скрипты для работы модальных окон
functions/      # Переиспользуемые функции
App.vue         # Корневой компонент
main.js         # Точка входа   