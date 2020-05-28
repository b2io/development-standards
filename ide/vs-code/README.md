# VS Code

Download: <https://code.visualstudio.com/>

## Packages

### ESLint & Prettier

#### eslint-plugin-prettier

Runs [Prettier](https://github.com/prettier/prettier) as an [ESLint](http://eslint.org) rule and reports differences as individual ESLint issues.

#### eslint-config-prettier

Turns off all rules that are unnecessary or might conflict with Prettier.

This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.

Note that this config _only_ turns rules _off,_ so it only makes sense using it together with some other config.

#### eslint-plugin-node

Additional ESLint's rules for Node.js

A code analysis tool for identifying and reporting problematic patterns in Javascript.

#### eslint-config-node

Pluggable ESLint config for Node.js that you can import, extend and override

### Install ESLint & Prettier for VSCode

Open Extensions menu in VSCode, and Search for `EsLint` and `Prettier`, and install. Or install from The extension marketplace [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

#### Install Packages

- Open a command line tool, `crt + j` inside VSCode.
- Enter `npm init -y` to create a package.json
  -Enter `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier` to install as a dev dependency.

Optional additional packages that can be included int the above install:

- Airbnb's ESLint rules, including ECMAScript 6+ and React `npx install-peerdeps --dev eslint-config-airbnb` OR if you don't want React `npx install-peerdeps --dev eslint-config-airbnb-base`
- React specific linting rules for ESLint `npm install eslint-plugin-react --save-dev`
-

Navit

- EditorConfig
- Prettier
- stylelint
