# changelogiter

Generate changelog in ~~GitHub~~ ~~GitLab~~ anywhere, it's look like changelogithub.

[![NPM version](https://img.shields.io/npm/v/changelogiter?color=fa6673&label=npm&logoColor=ffffff)](https://www.npmjs.com/package/changelogiter)

## Features

- Style look like [antfu/changelogithub](https://github.com/antfu/changelogithub), thanks for Anthony Fu. ([Changelog example](https://github.com/kaivanwong/opuntia/releases/tag/v0.0.1));
- Support exclamation mark as breaking change, e.g. `chore!: drop node v10`;
- Grouped scope in changelog;
- Create the release note, or update the existing one;
- List contributors;
- Support GitHub, GitLab and others, or just a `.md` file;

## Quick start

Get a simple experience by installing `changelogiter`:

```bash [npm]
npm install changelogiter

npx changelogiter
```

## Usage

`changelogiter` provides a variety of ways, you can choose the way you need:

### Github Actions

```yml
# .github/workflows/release.yml

name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: lts/*

      - run: npx changelogiter
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

### Gitlab Runners

```
```

### Only Output

```
```

<br>
</details>

## License

[MIT License](./LICENSE) © 2023-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
