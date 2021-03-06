---
layout: post
title:  "Dependabot's Gradle support is now in beta"
date:   2018-09-18 12:00:00 +0100
---

We've been working hard to improve Dependabot's Gradle support, and are
upgrading its status to "beta".

We [launched Gradle support][gradle-support] back in May with a very basic
`build.gradle` parser. Since then we've made a lot of improvements:
- We've rewritten our `build.gradle` parsing logic from scratch
- We've added support for updating versions specified with a property
- Dependabot now parses the repositories you're using from your buildfile and
  checks for available versions at only those locations
- Over 1,000 gradle update PRs generated by Dependabot have been merged

We'll keep working to improve Dependabot's Gradle support, and would love your
[feedback][feedback-link] if you're using it, but it's no longer an "early
alpha" product. We think Dependabot's Gradle support is now good enough for you
to rely on.

🐘

[gradle-support]: ../gradle-support
[feedback-link]: https://github.com/dependabot/feedback
