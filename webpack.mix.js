// webpack.mix.js
let fs = require("fs");
let mix = require("laravel-mix");
require("laravel-mix-copy-watched");

mix.setPublicPath("./dist");
mix.options({ manifest: false });

let removeFolders = ["/dist/"];

removeFolders.forEach((folder) => {
  fs.rmSync(process.cwd() + folder, { recursive: true, force: true });
});

mix.copyWatched("src/static/**/*", "dist", { base: "src/static/" });

mix.sass("./src/scss/style.scss", "dist/css");
mix.js("./src/js/script.js", "dist/js");

mix.browserSync({ server: { baseDir: "dist" } });
