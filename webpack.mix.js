const mix = require('laravel-mix');
require('laravel-mix-purgecss');

// mix.postCss('resources/styles.css', 'public/css', [
//   require('tailwindcss'),
// ])

mix
  .js("resources/app.js", "public/js")
  .postCss("resources/styles.css", "public/css", [
    require('tailwindcss'),
  ])
  .purgeCss()