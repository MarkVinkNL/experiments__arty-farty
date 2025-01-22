# Arty Farty

[Just some silly fun, check it out!](https://markvinknl.github.io/experiments__arty-farty/)

## Install

```cli
npm i
```

## Usage

### Inner workings

All static files from ./src/static get copied to the dist folder. So feel free to include any static css files in the ./src/static/css folder or js files in the ./src/static/js folder. Or images in the ./src/static/img folder and ... you get the picture don't ya?!

The /src/scss/style.scss and /src/js/script.js files are the mix webpack entry points, they get compiled to ./dist/css/style.css and ./dist/js/script.js. Add as many as you need to the mix config (webpack.mix.js).

### Running

For development use the watch command, browsersync will serve the index.html from the dist folder. And the copy watched plugin will keep the src/static folder and the dist folder in sync.

```
npm run watch
```

For the production build use

```
npm run prod
```

Compiles all your pretty scripts and styling down to a minified version!

Good luck and let me know if you make something pretty with this!

**Mark**
