import { expect, it } from 'vitest'
import { generate } from '../src'

it('parse', async () => {
  const COMMIT_FROM = '19cf4f84f16f1a8e1e7032bbef550c382938649d'
  const COMMIT_TO = '49b0222e8d60b7f299941def7511cee0460a8149'

  const { config, md } = await generate({
    from: COMMIT_FROM,
    to: COMMIT_TO,
  })

  expect(config).toMatchInlineSnapshot(`
    {
      "capitalize": true,
      "contributors": true,
      "from": "19cf4f84f16f1a8e1e7032bbef550c382938649d",
      "group": true,
      "prerelease": false,
      "repo": "kaivanwong/changelogiter",
      "scopeMap": {},
      "titles": {
        "breakingChanges": "🚨 Breaking Changes",
      },
      "to": "49b0222e8d60b7f299941def7511cee0460a8149",
      "types": {
        "feat": {
          "title": "🚀 Features",
        },
        "fix": {
          "title": "🐞 Bug Fixes",
        },
        "perf": {
          "title": "🏎 Performance",
        },
      },
    }
  `)
  expect(md.replace(/&nbsp;/g, ' ').replace(/[ ]+/g, ' ')).toMatchInlineSnapshot(`
    "### Breaking Changes

    - **cli**: Rename \`groupByScope\` to \`group\` - by **Enzo Innocenzi** in https://github.com/kaivanwong/changelogiter/issues/22 [<samp>(89282)</samp>](https://github.com/kaivanwong/changelogiter/commit/8928229)

    ### Features

    - Inline contributors - by **Anthony Fu** [<samp>(e4044)</samp>](https://github.com/kaivanwong/changelogiter/commit/e404493)
    - Throw on shallow repo - by **Anthony Fu** [<samp>(f1c1f)</samp>](https://github.com/kaivanwong/changelogiter/commit/f1c1fad)
    - Improve how references are displayed - by **Enzo Innocenzi** in https://github.com/kaivanwong/changelogiter/issues/19 [<samp>(cdf8f)</samp>](https://github.com/kaivanwong/changelogiter/commit/cdf8fe5)
    - Support \`--no-emoji\` - by **Enzo Innocenzi** in https://github.com/kaivanwong/changelogiter/issues/20 [<samp>(e94ba)</samp>](https://github.com/kaivanwong/changelogiter/commit/e94ba4a)
    - **contributors**:
     - Improve author list - by **Enzo Innocenzi** in https://github.com/kaivanwong/changelogiter/issues/18 [<samp>(8d8d9)</samp>](https://github.com/kaivanwong/changelogiter/commit/8d8d914)
    - **style**:
     - Group scopes only when one of the scope have multiple commits - by **Anthony Fu** [<samp>(312f7)</samp>](https://github.com/kaivanwong/changelogiter/commit/312f796)
     - Use \`<sup>\` for author info - by **Anthony Fu** [<samp>(b51c0)</samp>](https://github.com/kaivanwong/changelogiter/commit/b51c075)
     - Limit sha to 5 letters and make monospace - by **Anthony Fu** [<samp>(b07ad)</samp>](https://github.com/kaivanwong/changelogiter/commit/b07ade8)

    ### Bug Fixes

    - Use \`creatordate\` to sort tags - by **Frost Ming** in https://github.com/kaivanwong/changelogiter/issues/17 [<samp>(5666d)</samp>](https://github.com/kaivanwong/changelogiter/commit/5666d8d)
    - Config defaults - by **Anthony Fu** [<samp>(9232f)</samp>](https://github.com/kaivanwong/changelogiter/commit/9232fdf)
    - Use \`replace\` instead of \`replaceAll\` for Node 14 - by **Anthony Fu** [<samp>(5154e)</samp>](https://github.com/kaivanwong/changelogiter/commit/5154e78)
    - **cli**: Add missing \`--group\` option - by **Enzo Innocenzi** in https://github.com/kaivanwong/changelogiter/issues/21 [<samp>(22800)</samp>](https://github.com/kaivanwong/changelogiter/commit/228001d)
    - **style**: Revert \`<sup>\` style - by **Anthony Fu** [<samp>(742ae)</samp>](https://github.com/kaivanwong/changelogiter/commit/742ae0b)

    ##### [View changes on GitHub](https://github.com/kaivanwong/changelogiter/compare/19cf4f84f16f1a8e1e7032bbef550c382938649d...49b0222e8d60b7f299941def7511cee0460a8149)"
  `)
})
