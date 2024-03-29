Source code is stored on [Github](https://github.com/b2io/) using the [Git](http://git-scm.com/) source control system.

## Git Configuration

See the following **[`.gitconfig`](/source-control/.gitconfig)** as a starting point to setup the same configuration and aliases as the rest of the team. In Windows this file is located in the `C:\Users\<username>` directory. The `.gitignore` file is typically stored in the root directory of your Git repository.

## Files to Ignore

**[`.gitignore`](/source-control/.gitignore)** can be used to ignore common files such as IDE files. This global ignore file can be configured in the [`.gitconfig`](/source-control/.gitconfig) via

```
[core]
excludesfile = ~/.gitignore
```

This is the preferred method of ignore non-project-specific files so that there is not a need to request a change to another repository's `.gitignore` file.

The root directory of each repository should contain a `.gitignore` file that identifies the files that should be ignored for the project. These tend to vary based on project, but examples of common `.gitignore` files can be found: https://github.com/github/gitignore

### Clients

- Command line - The majority of the team uses command line exclusively. We tend to leverage the aliases in the **[`.gitconfig`](/source-control/.gitconfig)** fairly heavily. Some common third party cleints used are **[`iTerm2`}(https://iterm2.com/)** and **[`Powershell`](https://learn.microsoft.com/en-us/powershell/?view=powershell-7.3)**.
- [Visual Studio Code](https://code.visualstudio.com)
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Workflow

A new branch should be created for each issue/card. The feature branch should be pull requested back into the `main` branch, after peer approval the requester should rebase/squash the feature branch into `main`.

1. Get latest from main: `$ git puff` (`$ git puff origin` if you happen to have multiple remotes)
2. Create feature branch: `$ git cob 123-my-feature-branch-name-snake-case` (where 123 is the card number)
3. Push the feature branch to the remote prior to leaving for the day or creating a pull request: `$ git push origin 123-my-feature-branch-name-snake-case -u` (-u to set the upstream)
4. After PR approval use the "Squash and merge" button on Github, and then delete the remote branch. If you'd like to rebase/squash without the button you can do so via:

```
$ git puff origin main
$ git co 123-my-feature-branch-name-snake-case
$ git puff origin 123-my-feature-branch-name-snake-case
$ git rebase -i main
$ git push origin 123-my-feature-branch-name-snake-case -f
```

## Commit Message Convention

Our commit messaging differs depending on the client, but we typically follow a pattern similar to the [ Semantic Commit Messages Conventions](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) (with some modifications) to allow for better historical information and the generation of a `CHANGELOG.md` by script.

### Commit Message Format

```
<type>(<scope>): <subject>
<body>
<closes>
<breaking>
```

### Examples

```
feat(nav-header): Remove project navigation item

Closes #123, #456
Breaks navigation to project page
```

`chore(db): Add audit fields`

`WIP: Correct typos`

### Types

- feat - feature
- fix - bug fix
- chore - maintenance
- docs - documentation
- style - Formatting, missing semi colon, etc
- refactor - Change in code that doesn't affect behavior
- WIP - (ignored by script) Work in progress.

### Scope

Optional single word (or hyphenated words) to identify the place of the change.

### Subject

Required succinct description of the change.

### Closes

Optional section to identify the issues that the commit closes. Identified with keyword `Closes` followed by a comma
separated list of issue numbers prefixed with a hashtag "#".

### Breaking

Optional section to describe the features that the commit breaks. Identified with the keyword `Breaks`.
