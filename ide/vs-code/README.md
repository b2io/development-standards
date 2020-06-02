# VS Code

Download: <https://code.visualstudio.com/>

## Install ESLint & Prettier for VSCode

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
- add `plugins` to exports, and include the `prettier` plugin.
- Include `prettier/prettier` in the rules
- reference [eslintrc.js](/.eslintrc.js)

```
module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
```

#### Create Prettier Config

- Add `"prettier/prettier": "error",` to the rules in the [.eslintrc.js](/.eslintrc.js)
- If a local set of prettier rules is needed
  - in root of project create a file named `.prettierrc` for prettier rules
  - [Prettier rules can be found here](https://prettier.io/docs/en/options.html)

#### Custom Configurations

Additional linting rules can be found at <https://eslint.org/docs/rules/>

- Suggested CSS linting rules [can be found here](/css/.csslintrc).
- A few suggested javascript [configuration objects can be found here](/javascript/.eslintrc)
- A few additional javascript [linting rules can be found here](/javascript/.jscsrc)

#### References

- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [VS Code](https://code.visualstudio.com/)
- [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
