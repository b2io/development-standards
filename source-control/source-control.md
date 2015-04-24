Source code is stored on [Github](https://github.com/b2io/) using the [Git](http://git-scm.com/) source control system.

## Table of Contents
  1. [Config](#config)
       1. [Clients](#clients)
       1. [Mergetools](#Mergetools)
       1. [Aliases](#Aliases)
  1. [File to Ignore](#files-to-ignore)
  1. [Workflow](#workflow)
  1. [Commit Message Convention](#commit-message-convention)


## Config
The [`.gitconfig`](/source-control/.gitconfig) serves as a global configuration for git across a single machine. It includes configurations for the git user, command line aliases, and mergetool(s).

### Clients
 * Command line - The majority of the team uses command line exclusively.
 * [SourceTree](http://www.sourcetreeapp.com/)

### Mergetools
 * [KDiff3](http://kdiff3.sourceforge.net/)
 * [P4Merge](http://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools)

### Aliases
 * `amend` - Allows for the modification of the most recent commit
 * `aa = add .`
 * `ba = branch --all`
 * `br = branch`
 * `ci = commit` - Commit via vi
 * `cm = commit -m` - Commit with message
 * `co = checkout`
 * `cob = checkout -b` - Create a new branch and checkout
 * `d = branch -D` - Hard delete branch
 * `dc = diff --cached`
 * `hist` - Commit history with dates
 * `last = log -1 HEAD` - Display log for last commit
 * `lg` - More succinct log
 * `puff = pull --ff --ff-only` - To be used instead of `pull` to avoid the creation of a merge branch on `pull`.

## Files to Ignore
Common ignore files, such as IDE files, can be configured via a [`.gitignore`](/source-control/.gitignore) file identified in the `.gitconfig` 
```
[core]
excludesfile = ~/.gitignore
``` 

This is the preferred method of ignore non-project-specific files so that there is not a need to request a change to another repository's `.gitignore` file. 

The root directory of each repository should contain a `.gitignore` file that identifies the files that should be ignored for the project. These tend to vary based on project, but examples of common `.gitignore` files can be found: https://github.com/github/gitignore

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
We follow the [AngularJS Git Commit Message Conventions](https://docs.google.com/document/u/0/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/mobilebasic) (with some modifications) to allow for better historical information and the generation of a `CHANGELOG.md` by script. 

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
 * feat - feature
 * fix - bug fix
 * chore - maintenance
 * docs - documentation
 * style - Formatting, missing semi colon, etc
 * refactor - Change in code that doesn't affect behavior
 * WIP - (ignored by script) Work in progress. 

### Scope
Optional single word (or hyphenated words) to identify the place of the change.

### Subject
Required succinct description of the change.

### Closes
Optional section to identify the issues that the commit closes. Identified with keyword `Closes` followed by a comma 
separated list of issue numbers prefixed with a hashtag "#".

### Breaking
Optional section to describe the features that the commit breaks. Identified with the keyword `Breaks`.


