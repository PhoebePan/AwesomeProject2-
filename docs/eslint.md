# Project Linting

### 在專案資料夾中安裝 eslint.

* Run `npm install -g eslint`  
* VSCode 安裝 ESLint 外掛  
* `.eslintrc.json`  

```
{
  "extends": "airbnb", // 使用 Airbnb 推薦規則
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": [
      0
    ],
    "react/require-default-props": [
      0
    ],
    "global-require": [
      0
    ]
  }
}
```

* npm scripts
```
// package.json
"scripts": {
  // ...
  "lint": "eslint app/",
  "lint:fix": "eslint app/ --fix"
},
```

* Update VSCode settings
```
// .vscode/settings.json
// Place your settings in this file to overwrite default and user settings.
{
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```