# Хакатон (Лента)

ㅤКлиентская часть сервиса предсказательной модели для "Лента"

## Команда

- [Maria](https://github.com/shinonhorror)   <img src="https://img.shields.io/badge/Teamlead-ff69b4" alt="Teamlead" class="badge">
- [Ananastasia](https://github.com/alheym)

## Деплой

ㅤ[Netlify](https://kaleidoscopic-dodol-13b174.netlify.app/)

## Установка

установка зависимостей:

```bash
npm i
```

запуск проекта (Hot Reloading):

```bash
npm run dev
```

запуск сборки:

```bash
npm run build
```

запуск сборки docker-контейнера:

```bash
npm run docker-build
```

запуск docker-контейнера:

```bash
npm run docker-start
```

## Стэк технологий

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Day.js](https://github.com/iamkun/dayjs/) - работа с датами
- [Tremor](https://www.tremor.so/) - графики и компоненты
- [Tailwind](https://tailwindcss.com/) - стилизация
- [Eslint](https://eslint.org/) + [prettier](https://prettier.io/) - линтер для кода 
- [Vite](https://vitejs.dev/) - сборщик
- [Docker](https://www.docker.com/)

Архитектура: [FSD (Features sliced design)](ARCHITECTURE.md)

media queries: 1920px

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind" alt="Tailwind" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="ESLint" alt="ESLint" width="40" height="40"/>&nbsp;
  <img src="https://prettier.io/icon.png" title="Prettier" alt="Prettier" width="40" height="40"/>&nbsp;
  <img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" title="Netlify" alt="Netlify" width="40"/>&nbsp;
  <img src="https://en.vetores.org/d/vite-js-logo.svg" title="Vite" alt="Vite" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original.svg" title="Docker" alt="Docker" width="40" height="40"/>&nbsp;
</div>

## Особенности

Реализована оптипизация работы с большим объемом данных: 
 - виртуализация таблиц, 
 - бесконечный скролл (загрузка данных пачками по n штук).

Настроен роутинг - [React-Router](https://reactrouter.com/en/main)
Настроен стейт менеджер - [Redux Toolkit](https://redux-toolkit.js.org/).  
Для стилизации используется Tailwind.
Настроена автоматическая проверка линтерами при создании pull request с помощью github actions.
Настроена сборка в docker-контейнер.

## Дизайн

- Макеты: [figma](https://www.figma.com/file/VyRPWoY3pyHrlUODlwK3VV/%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-%E2%84%964-QuadroTech_%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD-%D0%9B%D0%B5%D0%BD%D1%82%D0%B0-(%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F)?node-id=195%3A2044&mode=dev)  
- Интерфейс: [архив](INTERFACE.md)

<style>
  .badge {
    padding-left: 5px;
    height: 18px;
  }
</style>
