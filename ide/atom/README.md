# Atom

Download: <https://atom.io/>

## Terminal Panel

- Type `crt+shift+P` to open command palette, and type `Application: Show Preferences` and select.
- Click on the `Install` option in the left hand menue of the preferences window.
- Type `atom-terminal-panel` into search field, and locate package from list, click install.
- `shift+enter` will open terminal

## ESLint

- Type `crt+shift+P` to open command palette, and type `Application: Show Preferences` and select.
- Click on the `Install` option in the left hand menue of the preferences window.
- Type `linter-eslint` into the search field. Locate the package from the returned list, and click install.
- Type `linter` into the search field, and locate the linter package from the returned list, and click to install.
- Open your terminal, and navigate to the root directory of your project.
  - Install the ESLint Cli by running `npm -g i eslint-cli`
  - Install ESLint locally to your project by running `npm i --save-dev eslint`
  - Initialize ESLint by running `eslint --init` and answering the following questions specific to your project, and selecting Airbnb as the style guide. (Recommended)

## Prettier
