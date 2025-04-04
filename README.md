# iEscrow Platform Landing Page

## How to start

```bash
git clone https://github.com/iEscrow/Platform-Landing-Page.git
cd Platform-Landing-Page
npm i
npm run dev
```

### Architecture

```bash
    app/
    │
    ├── src/
    │   ├── assets/                         #images, icons, fonts, videos
    │   ├── components/                     #recyclable components
    │   ├── context/
    │   │      ├── Currency context
    │   │      └── Theme context
    │   ├── hooks/                          #custom hooks
    │   ├── locales/                        #translation folder
    │   ├── pages/                          #pages folder
    │   ├── providers/                      #providers folder
    │   │      ├── AppProviders.jsx         #principal provider
    │   │      └── rest_of_providers...
    │   └── routes/                         #routes folder
    │          ├── AppRoutes.jsx            #app routes
    │          └── rest_of_routes...        #private routes
    │
    ├── index.html                          #root page
    └── ...configs
```

### Where can i Add More Languages?

In src/data/languages.js you can add a language to appear in the selector.
example: { id: 2, value: 'en', label: 'English' }.
In src/locales/i18n.js add the new language.
In src/locales add a new folder with a translation.json archive with the language variables.

### Where can i Add More Currency?

In src/data/currency.js you can add a currency to appear in the selector.
example: { id: 1, value: 'USD', label: 'USD' }
