Source code is stored on [Github](https://github.com/b2io/) using the [Git](http://git-scm.com/) source control system.

## Git Configuration

See the following **[`.gitconfig`](/source-control/.gitconfig)** as a starting point to setup the same configuration and aliases as the rest of the team. In Windows this file is located in the `C:\Users\<username>` directory.

## Files to Ignore

**[`.gitignore`](/source-control/.gitignore)** can be used to ignore common files such as IDE files. This global ignore file can be configured in the [`.gitconfig`](/source-control/.gitconfig) via

```
[core]
excludesfile = ~/.gitignore
```

This is the preferred method of ignore non-project-specific files so that there is not a need to request a change to another repository's `.gitignore` file.

The root directory of each repository should contain a `.gitignore` file that identifies the files that should be ignored for the project. These tend to vary based on project, but examples of common `.gitignore` files can be found: https://github.com/github/gitignore

### Clients

- Command line - The majority of the team uses command line exclusively. We tend to leverage the aliases in the **[`.gitconfig`](/source-control/.gitconfig)** fairly heavily..
- [SourceTree](http://www.sourcetreeapp.com/)
- [Visual Studio Code](https://code.visualstudio.com)

### Mergetools

- [KDiff3](http://kdiff3.sourceforge.net/)
- [P4Merge](http://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools)
- [Visual Studio Code](https://code.visualstudio.com)

## Workflow

A new branch should be created for each issue. The feature branch should be pull requested back into the `master` branch, after peer approval the requester should rebase the feature branch with the latest `master` and then merge the feature branch into `master`.

1. Get latest from master: `$ git puff origin`
2. Create feature branch: `$ git cob 123-my-feature-branch-name-snake-case`
3. Push the feature branch to the remote prior to leaving for the day or pull request: `$ git push origin 123-my-feature-branch-name-snake-case -u`
4. After PR approval rebase with master:

```
$ git puff origin master
$ git co 123-my-feature-branch-name-snake-case
$ git puff origin 123-my-feature-branch-name-snake-case
$ git rebase -i master
$ git push origin 123-my-feature-branch-name-snake-case -f
```

Merge feature branch into master either from Github, and then delete the feature branch from Github.

## Commit Message Convention

We follow the [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1OLFfQHdZXpd-oBNik3_rgFyPooZ3U4-KAGQrEpQVbXs/edit?usp=sharing) (with some modifications) to allow for better historical information and the generation of a `CHANGELOG.md` by script.

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

### Commit Hook

To ensure that your commits match the commit message conventions you can configure a git commit hook.

Download [`validate-commit-msg.js`](/source-control/validate-commit-msg.js) (directions below assume you've placed it at the root of your repository).

- PC: In cmd from the root of your repository run `ln -s ../../validate-commit-msg.js .git/hooks/commit-msg`
- MAC: `sudo -s /usr/local/bin/node /usr/bin/node`
