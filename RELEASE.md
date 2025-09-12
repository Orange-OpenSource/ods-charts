# Make a release

## Publish

- Get last main branch
- Run `npm run release-version $old-version $new-version`, e.g. `npm run release-release 0.2.0 0.2.1`
- RUN `npm run install:all`
- Make a commit "chore(release): v$new-version", e.g. "chore(release): v0.2.1"
- Push it to main `git push`
- Make a tag : `git tag v$new-version`, e.g `git tag v0.2.1`
- Push it to main `git push origin v$new-version` , e.g `git push origin v0.2.1`
- Run `npm run release`
- Check that everything is well published.

## Make doc

- Run `npm run release-docs`
- Create a new branch with `git checkout -b gh-pages-$newversion`, e.g. `git checkout -b gh-pages-0.2.1`
- `git commit -m "chore(release): v0.2.1 🚀"`
- `git push`
- create a new PR targeting gh-pages
- merge it

## Make the release on Github

- on github draft a new release
- choose the tag
- Generate release note
- Update Release title v...
- Format the document

```
## What's Changed

### Features 🚀

*

### Fixes 🐛

*

### Documentation 📚

*

### Chores :dependabot:
```
