const mix = require('laravel-mix');
require('laravel-mix-tailwind');

// mix.postCss('resources/styles.css', 'public/css', [
//   require('tailwindcss'),
// ])

mix.postCss('resources/css/app.css', 'public/css')
      .tailwind('./tailwind.config.js');

if (mix.inProduction()) {
  mix.version();
}