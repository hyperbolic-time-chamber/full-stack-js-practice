# Full Stack JS Practice

## Commit Guidelines

Please use multi-line messages for any commits that effectively do more than one thing to the codebase. A bigger commit with a multi-line commit message that outlines each change to the codebase is generally more conducive for accurate messaging. The exception to this is when a fix or feature pertains to a single line being changed in the codebase.

All commits must be prefixed using the following prefixes in brackets:

```
docs     | documentation related
ops      | operations related (dependency/lock-file updates, configuration changes, etc.)
feat     | adds a new feature
prog     | progress on a new feature
fix      | adds a fix for an issue
test     | adds a test
refactor | refactoring-related (DRY-up some parts of the code)
style    | code-style related (adding line breaks, removing whitespace, etc.)
visual   | front-end UI related changes
```

**Please do not mix up the nature of a single commit.** For example, if you notice that some line breaks need to be added and a bug needs to be fixed, make a separate `[style]` commit for the line breaks and a `[fix]` commit for addressing the bug.

Example multi-line commit message:

```
[docs] add root and developer docs
- add README.md to project root `/`
- add README.md to project developer documentation `docs/`
```

Example single-line commit messages:

```
[docs] fix typo in first-world-problems API doc
[ops] add lodash dependency to query-generator service
```

## Branch Guidelines

Cut a namespaced feature branch from master.

Your branch should follow this naming convention:

* bug/...
* feat/...
* test/...
* doc/...
* refactor/...

These commands will help you do this:

```bash
# Creates your branch and brings you there
git checkout -b `your-branch-name`
```