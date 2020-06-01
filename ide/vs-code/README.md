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
- Run `npm init -y` to create a package.json
- Run `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier` to install as a dev dependency.

Optional additional packages that can be included in the above install:

- Airbnb's ESLint rules, including ECMAScript 6+ and React `npx install-peerdeps --dev eslint-config-airbnb` OR if you don't want React `npx install-peerdeps --dev eslint-config-airbnb-base`
- React specific linting rules for ESLint `npm install eslint-plugin-react --save-dev`

#### Create ESLint Config

- run `eslint --init` and follow command prompts to create [.eslintrc.js](/.eslintrc.js)
  - remove all generated code except for `extends` and `rules`

#### Create Prettier Config

- Add `"prettier/prettier": "error",` to the rules in the [.eslintrc.js](/.eslintrc.js)
- If a local set of prettier rules is needed
  - in root of project create a file named `.prettierrc` for prettier rules
  - [Prettier rules can be found here](https://prettier.io/docs/en/options.html)

#### Custom Configurations

Navit

- EditorConfig
- Prettier
- stylelint
