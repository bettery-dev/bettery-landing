#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.bettery.app' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:m1ome/bettery-landing.git master:gh-pages

cd -