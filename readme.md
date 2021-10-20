
[![Build/Deploy](https://github.com/wgnrd/wgnrd.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/wgnrd/wgnrd.github.io/actions/workflows/main.yml)
# Personal Website

This is the repository for my personal website.

The whole website is done with [HUGO](https://gohugo.io).

## About this specific setup

The styling is self created. The SCSS pipeline from HUGO is used to transpile and minify all the styles.
The portfolio section gets all data from `/data/portfolio.json`. This data will be transformed by hugo on compile time.
Any push to `main`-branch of this repository will start a new production build. The artifacts will be deployed, if the build is successful.

## Getting started
To run the website in debug mode, HUGO needs to be installed.
```
brew install hugo
```

After that, the static site can be compiled and served as follows.
```
hugo serve
```

If you want to produce a production ready build
```
hugo --minify
```
