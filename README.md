# Next.js SY Store Commerce

SY Store Commerce is bootstraped with Next.js Commerce starter kit [nextjs.org/commerce](https://nextjs.org/commerce)

Demo live at: [systore.vercel.app](https://systore.vercel.app/)

This project is currently <b>under development</b>.

## Commit Messages
I highly encourage to use emojis in your commit messages.

Read -> https://dev.to/babakks/emojis-for-better-git-commit-messages-52fa

## Code Style
Editor of choice is VS Code.
Refer to `.vscode` folder to install the recommended extensions and code style settings for this repo.

## Work in progress

We're using Github Projects to keep track of issues in progress and todo's. Here is our [Board](https://github.com/rangigo/systore-commerce/projects/1)

## Integrations

Next.js Commerce integrates out-of-the-box with BigCommerce. We plan to support all major ecommerce backends.

## Troubleshoot

1. First thing you do is: <b>set your environment variables in with .env.local file in the root folder</b>

.env.local
```sh
BIGCOMMERCE_STOREFRONT_API_URL=<>
BIGCOMMERCE_STOREFRONT_API_TOKEN=<>
BIGCOMMERCE_STORE_API_URL=<>
BIGCOMMERCE_STORE_API_TOKEN=<>
BIGCOMMERCE_STORE_API_CLIENT_ID=<>
```

Contact Thomas to retrieve the environtment variables.

2. Install the dependencies: `npm i`. 

3. Run `npm run dev` to build and watch for code changes.
