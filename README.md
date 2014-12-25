# Web App Template

This template is for scaffolding an web app.

## Contains

- Sass and Coffee processed with Gulp
- Gup web server starts at default gulp task (does not contain auto-reloading because gulp-connect has some issues)
- 2 Enviorments - Development and Production (to change them just uncomment the env variable from the gulpfile.js)
- Browserify with vinyl transform

### In Development Enviorment
- Sass and Coffee are not minified

### In Production Enviorment
- Sass, Coffee, Json and Html elements are minified
