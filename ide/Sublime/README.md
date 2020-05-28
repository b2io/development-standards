# Sublime Text

Download: <https://www.sublimetext.com/3>

## SublimeLinter

- Press `Crt+Shift+P` to open the command palette. Type in `Package` and select `Package Control: Install Package`
- Type `SublimeLinter` into the text box of the command palette, and select. (Select SublimeLinter not SublimeLint). Docs for SublimeLinter can be found [here](http://www.sublimelinter.com)

### JSHint

#### Javascript syntax checker

- Open your terminal and run `npm install -g jshint`
- Press `Crt+Shift+P` to open the command palette. Type in `Package` and select `Package Control: Install Package`
- Type `JsHint` into the textbox of the command palette, and select `JSHint`

### Prettier

- Press `Crt+Shift+P` to open the command palette. Type in `Package` and select `Package Control: Install Package`
- Type `JsPrettier`, then select it to complete the installation.

#### Usage

- To use Prettier Press `Crt+Shift+P` to open the command palette, type `JsPrettier Format Code`
- Or right click anywhere in file to open the Context Menu, and select `JSPrettier Format Code`

#### Customize

- Go to menu: Preferences => Package Settings => JSPrettier => Settings: User

  - Include custom congifurations.

        - Ex: `{ "auto_format_on_save_excludes": [ "*/node_modules/*", "*/file.js", "*.json" ] }`
