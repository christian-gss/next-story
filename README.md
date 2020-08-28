# Ohayo! Welcome to GSS Wordpress Boilerplate  👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/gss-inc/primary-theme#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/gss-inc/primary-theme/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://github.com/gss-inc/primary-theme/blob/master/LICENSE)

> Wordpress with GULP and can use All in one Migration

### 🏠 [Homepage](https://gitlab.com/christianmarquez.gss/wordpress-boilerplate)

## Install

```sh
npm install
```

Open `gulpfile.js`, search imgDest, styleDest, scriptDest and fontDest. Change `starter-theme` with your `theme` folder name.

## Usage

Technically, We didn't include live server for this. You can build the `app` by using `gulp`.

```sh
gulp 
```

To watch current changes, you can use `gulp watch`.

```sh
gulp watch
```

## File Structure

- __wordpress-boilerplate__
  - __app__
    - __js__
      - [scripts.js](wordpress-boilerplate/app/js/scripts.js)
      - __vendors__
        - [jquery-3.4.1.min.js](wordpress-boilerplate/app/js/vendor/jquery-3.4.1.min.js)
        - [slick.min.js](wordpress-boilerplate/app/js/vendor/slick.min.js)
    - __scss__
      - __vendors__
      - __modules__
        - [_common.scss](wordpress-boilerplate/app/scss/modules/_common.scss)
        - [_fonts.scss](wordpress-boilerplate/app/scss/modules/_fonts.scss)
        - [_footer.scss](wordpress-boilerplate/app/scss/modules/_footer.scss)
        - [_buttons.scss](wordpress-boilerplate/app/scss/modules/_buttons.scss)
        - [_header.scss](wordpress-boilerplate/app/scss/modules/_header.scss)
      - __pages__ 
        - [_home-page.scss](wordpress-boilerplate/app/scss/pages/_home-page.scss)
      - __utilities__
        - [_functions.scss](wordpress-boilerplate/app/scss/utilities/_functions.scss)
        - [_mixins.scss](wordpress-boilerplate/app/scss/utilities/_mixins.scss)
        - [_variables.scss](wordpress-boilerplate/app/scss/utilities/_variables.scss)
      - [main.scss](wordpress-boilerplate/app/scss/main.scss)

### Description
| File/Folder  | Description |
| ------------- | ------------- |
|  js/scripts.js | This is where you can add your main scripts, no need to import js/vendors. |
| js/vendors  | This is where you can add vendor/third party plugin scripts. When you add something here, it automatically included to dist/bundle.js |
| scss/vendors  | This is where you can add vendor/third party plugin css.  |
| scss/modules  | This is where you can add module partials, like buttons, lists, fonts, etc..  |
| scss/pages  | This is where you can add style for specific page.  |
| scss/utilities  | This is where you can add dynamic functions, mixins and variables.  |
| scss/main.scss  | This is where you can import partials from vendors, modules, pages and utilities.  |

## Note
If all setup is done, and working. Remove `.git`, so you can use this project to other repo. Remove `.git` using [this](https://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init), or you can just run this in your terminal. 

```sh
rm -rf .git
```
You can now add new or link existing repo to your project.

<b>Add new repository</b>

```sh
git init
```
<b>Add existing repository</b>

```sh
git remote add origin <remote repository URL>
```


## Author

👤 **Christian Marquez, Joshua Baltazar and Ralph Nival**

* Github: [@christianmarquez.gss](https://gitlab.com/christianmarquez.gss/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://gitlab.com/christianmarquez.gss/wordpress-boilerplate/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [Christian Marquez, Joshua Baltazar and Ralph Nival](https://gitlab.com/christianmarquez.gss/wordpress-boilerplate).

This project is [ISC](https://gitlab.com/christianmarquez.gss/wordpress-boilerplate) licensed.

***