# This no longer works.

## Link Shortener
![](https://og-cards.sarthakmohanty.vercel.app/Link%20Shortener.png?theme=dark&md=1&fontSize=200px)
![GitHub](https://img.shields.io/github/license/sarthaktexas/srtk.me-v2)
![GitHub issues](https://img.shields.io/github/issues/sarthaktexas/srtk.me-v2)
![GitHub contributors](https://img.shields.io/github/contributors/sarthaktexas/srtk.me-v2)
![GitHub last commit](https://img.shields.io/github/last-commit/sarthaktexas/srtk.me-v2)

⚡️ Fast and easy-to-use link shortener using Next.js and Airtable.

## Airtable Setup:
```
╔══════════╦══════════════════════╗
║ slug     ║ destination          ║
╠══════════╬══════════════════════╣
║ website  ║ https://srtk.me      ║
╠══════════╬══════════════════════╣
║ hackclub ║ https://hackclub.com ║
╠══════════╬══════════════════════╣
║ rishi    ║ https://rishi.cx     ║
╚══════════╩══════════════════════╝
```

The Airtable used must be formatted as shown above. There may be other columns, but the first two must be `slug` and `destination` (lowercase).
Also **the table name must be `Links`** (capital L).
> Note the Capitalization!

`slug` is the end URL you'd like to redirect from.
`destination` is the end URL that you'd like to redirect to.

> in the example above, the slug *website* means the user would go to /website and get redirected to the destination *https://srtk.me*

## Basic Setup:

Just click the button below, and fill in the appropriate fields.
Your `AIRTABLE_API_KEY` can be found like [this](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key).
And your `AIRTABLE_BASE_ID` can be found like [this](https://www.basegenius.com/airpower/help/how-to-find-airtable-base-id/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsarthaktexas%2Fsrtk.me-v2&env=AIRTABLE_API_KEY,AIRTABLE_BASE_ID&envDescription=API%20Key%20needed%20to%20access%20Airtable%20and%20BaseID%20for%20specific%20Base&project-name=link-shortener&repo-name=link-shortener&demo-title=Link%20Shortener%20Demo&demo-description=Live%20Link%20Shortener%20for%20Sarthak%20Mohanty&demo-url=https%3A%2F%2Fsrtk.me%2F&demo-image=https%3A%2F%2Fog-cards.sarthakmohanty.vercel.app%2FLink%2520Shortener.png%3Ftheme%3Dlight%26md%3D1%26fontSize%3D200px%26caption%3DDemo)

&copy; Sarthak Mohanty 2020. Licensed under [MIT](LICENSE). See [LICENSE](LICENSE) for more infomation.
