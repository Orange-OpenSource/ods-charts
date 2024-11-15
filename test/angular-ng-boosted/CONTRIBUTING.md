[:mega: **CONTRIBUTING.md guidelines**]

> Remove guidelines and text in [] before submitting your request

# Contributing to Angular Boosted Starter

**Thank you for your interest in _Angular Boosted Starter_. Your contributions are highly welcome.**

There are multiple ways of getting involved:

- [Contribute code](#how-to-contribute)
- [Report a bug](#how-to-report-a-bug)
- [Suggest a feature](#how-to-suggest-a-feature-or-enhancement)

---

# Ground Rules

## We Develop with GitLab

We use [GitLab DIOD](https://gitlab.tech.orange) to host code, to track [issues](https://gitlab.tech.orange/ods/angular-boosted-starter/-/issues) as well as
accept [merge requests](https://gitlab.tech.orange/ods/angular-boosted-starter/-/merge_requests).

## We Use Merge Requests

Merge requests are the best way to propose changes to the codebase. We actively welcome yours.

## Use conventional git commits

We are using [semantic-release](https://semantic-release.gitbook.io/) to manage our releases with the help of
the [Gitlab CI template](https://to-be-continuous.gitlab.io/doc/ref/semantic-release/)

This nice tool automatically takes care or version management, package publishing and release note generation, based
on [Commit message syntax](https://semantic-release.gitbook.io/semantic-release/#commit-message-format).

[**Bonus examples**]

- [ Ensure cross-platform compatibility for every change that's accepted.]
- [ Ensure that code that goes into core meets all requirements in this [checklist](link-to-your-checklist).]
- [ Create issues for any major changes and enhancements that you wish to make. Discuss things transparently and get community feedback.]
- [ Don't add any classes to the codebase unless absolutely needed.]
- [ Keep feature versions as small as possible, preferably one new feature per version.]

# How to contribute

[**Give them a quick walkthrough of how to submit a
contribution.** If you use [a merge request template](.gitlab/merge_request_templates/Feature.md) with your own acceptance criteria, explain how to use it. If you have a different process for small or "obvious" fixes, let them know.]

[⚠ **Make sure the pipeline works as well when the project is forked.** ⚠]

This is an outline of what the workflow for code contributions looks like.

Check the list of open [issues](../../issues). Either assign an existing issue to yourself, or create a new one that you
would like work on and discuss your ideas and use cases.

It is always best to discuss your plans beforehand, to ensure that your contribution is in line with our goals.

1. [Fork the repository](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html)
   and **[create your branch](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-new-branch)
   from `develop` if it exists** otherwise use `master`
1. [Open a new merge request](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html#merging-upstream) from your fork to the parent repository
1. If you've added code that should be tested, add tests
1. Add or update documentation when it's needed
1. Ensure the test suite passes and make sure your code lints
1. Project maintainers might comment on your work as you progress
1. When you are done, ping a [maintainer](MAINTAINERS) for a review of your merge request

**Thanks for your contributions!**

# How to report a bug

Reporting bugs is one of the best ways to contribute. Before creating a bug report, please check that
an [issue](/issues) reporting the same problem does not already exist. If there is such an issue, you may add your
information as a comment.

To report a new bug you should [open an issue](../issues/new?issuable_template=bug?issue) that summarizes the bug, it's
that easy!

If you want to provide a fix along with your bug report: That is great! In this case please send us a merge request as
described in section [How to contribute](#how-to-contribute).

# How to suggest a feature or enhancement

[**If you have a particular roadmap, goals, or philosophy for development, share it
here.** This information will give contributors context before they make suggestions that may not align with the project’s needs.]

To request a new feature you should [open an issue](../issues/new?issuable_template=issue?issue) and summarize the
desired functionality and its use case.

[**Code, commit message and labeling conventions.** These sections are not necessary, but can help streamline the contributions you receive: explain your preferred style for code, explain if you use any [commit message conventions](https://www.conventionalcommits.org/en/v1.0.0/#summary), and explain if you use any labeling convention for issues.]

**Have fun, and happy coding!**
