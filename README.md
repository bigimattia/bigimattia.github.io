# bigimattia.github.io
Personal portfolio

## dependencies
> node v19.8.1

> angular v16.0.0

> ionic v7.0.0

## get started
> [optional] nvm use node 19.8

> npm install

> ionic serve

## build and deploy to gh-pages
First build a www directory using:
> ionic build --prod --base-href https://github.com/bigimattia/bigimattia.github.io/

Then deploy to branch "gh-pages" the "www" folder created using "angular-cli-ghpages":
> npx angular-cli-ghpages --dir=www

Remeber to change the deploy branch in the repository settings to gh-pages