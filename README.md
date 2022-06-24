## Файловая структура

```
myApp
├── .github
│   ├── bug_report.md                - шаблон для создания issue
│   └── feature_request.md           - шаблон для создания запроса на улучшение
│
├── source                           - все основные файлы, которые вам нужны
│   ├── fonts                        - папка с подключаемыми шрифтами
│   │   ├── Roboto-Regular.woff      – шрифт старого формата
│   │   └── Roboto-Regular.woff2     – шрифт более современного формата
│   │
│   ├── html                         – HTML компоненты сайта
│   │   ├── includes/                – блоки
│   │   │   ├── common               - папка с переиспользуемыми блоками
│   │   │   │   ├── footer.html      - футер сайта
│   │   │   │   └── header.html      - хедер сайта
│   │   │   │
│   │   │   └── index                - папка блоков для страницы views/index.html
│   │   │       ├── hero.html        - секция hero
│   │   │       └── structure.html   - секция structure
│   │   │
│   │   └── views/                   – страницы
│   │       └── index.html           - главная (корневая) страница сайта
│   │
│   ├── img                          - графика
│   │   └── logo.svg                 - лого проекта
│   │
│   ├── js                           - скрипты сайта
│   │   ├── index.js                 - точка входа для скриптов
│   │   └── script.js                - пример импортируемого модуля
│   │
│   ├── root                         - файлы, которые будут лежать в корне проекта
│   │   └── manifest.json            - базовая информация о сайте для браузера
│   │
│   ├── scss                         - стили проекта
│   │   ├── blocks                   - примеры стилей вынесенных в блоки
│   │   │   ├── container.scss       - стили для .container
│   │   │   ├── header.scss          - стили для .header
│   │   │   ├── logo.scss            - стили для .logo
│   │   │   ├── nav.scss             - стили для .nav
│   │   │   └── visually-hidden.scss - этот блок используется для того, чтобы доступно прятать контент на странице.
│   │   │
│   │   ├── font-face.scss           - подключение шрифтов
│   │   ├── global.scss              - глобальные стили
│   │   ├── style.scss               – точка входа для стилей проекта
│   │   └── variables.scss           - переменные (цвета, размеры, шрифты и т.п.)
│   │
│   └── vendors                      - папка для внешних скриптов и библиотек
│       └── normalize-css/           - нормализация стилей по умолчанию (https://necolas.github.io/normalize.css/)
│           └── normalize.min.css    - минифицированный файл
│
├── webpack                          - папка для конфигураций webpack
│   ├── helpers                      - папка с вспомоготельными функциями  
│   │   └── generateHtmlPlugins.js   - генерация настроек для шаблонов 
│   └── webpack.config.js            - конфиг для webpack
│
├── .editorconfig                    - настройки для редактора кода
├── .eslintrc.js                     - настройки для линтера JS (ESLint)
├── .gitattributes                   - технический файл для Git
├── .gitignore                       - файлы/папки игнорируемые Git
├── .prettierrc                      - настройки форматирования кода (Prettier)
├── .stylelintrc.js                  - настройки для линтера SCSS (Stylelint)
├── package.json                     - зависимости, скрипты и базовая информация
└── README.md                        - описание проекта
```

## Зависимости

- node ^10

## Установка

```sh
npm i
```

## Запуск

```sh
npm start
```

## Сборка

```sh
npm run build
```

## Запуск тестов

```sh
npm run test
```
