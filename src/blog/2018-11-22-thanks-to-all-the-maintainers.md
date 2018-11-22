---
layout: post
title:  "Today, we're thankful for all the open-source maintainers"
date:   2018-11-22 11:00:00 +0100
---

Happy Thanksgiving. Today, we're thankful for all the open-source maintainers.
We couldn't have built Dependabot without their work - we're built on top of
161 Ruby dependencies and 1,420 JavaScript packages, not to mention Ruby
itself, the libraries in our infrastructure, and the tools we use every day.

Open source maintainers also continue to support and improve the infrastructure
we use, for free. We hope that Dependabot can do a little bit to give back. Our
product will always be free for open source, as the very least we can do.

Moshe Zadka has a [great post][zadka-article] on how to give thanks to open
source maintainers. We'd like to add an 11th item to his list of ways to support
the silent army of people who work to make your life easier:

Update your dependencies.

For a maintainer, supporting multiple versions of a project is painful. It's
painful to triage and try to replicate a bug only to find it has already been
fixed in an update. It's painful to backport security fixes. It's painful to
ship performance improvements and think that many users won't benefit from them.
A maintainer's time is most productive when as many of their users as possible
are up-to-date.

Staying up-to-date isn't zero-effort, but it is worth it.

You may have many out-of-date dependencies. You may need to refactor some of
your code to handle breaking changes. Digging into exactly how a dependency has
changed and why might be non-trivial. However, as well as helping maintainers,
being on the latest version is the best strategy for
[avoiding security vulnerabilities][security-analysis]. For most dependencies
the latest version is the most performant version. You'll also benefit from bug
fixes, new features and compatibility improvements.

Once you're up-to-date, we're here to automate away the pain of staying on the
latest version.

Happy Thanksgiving.

[zadka-article]: https://opensource.com/article/18/11/ways-give-thanks-open-source
[security-analysis]: ../the-latest-dependency-version-is-probably-the-most-secure
