# Gov.sa Design System

## CSS architecture

- Gov.sa is built on [Bootstrap](https://getbootstrap.com).
- The CSS foundation of Gov.sa is built with the Sass language.
- Gov.sa built mobile first.
- CSS selectors are prefixed with govsa (For example: .govsa-button). This identifier helps the design system avoid conflicts with other styles on a site which are not part of gov.sa design system.
- Uses a [BEM](http://getbem.com/introduction/) approach for naming CSS selectors. Blocks are separated from elements with two underscores (__) For example: .govsa-button__elem.  Modifier classes consist of the base class plus a modifier suffix, separated by two dashes (--) for example: govsa-button--disabled , govsa-button__secondary--disabled.


# CSS File Organization:
```bash
gov.sa-design-system/ 
 ├── css/ 
 │   ├── arabic
 │   │   ├── govsa-ds-ar.min.css.map  
 │   │   ├── govsa-ds-ar.min.css
 │   │   └── govsa-ds-ar.css
 │   ├── english
 │   │   ├── govsa-ds-en.min.css.map  
 │   │   ├── govsa-ds-en.min.css
 │   │   └── govsa-ds-en.css
 ├── js/ 
 │   ├── govsa-ds.min.js.map 
 │   ├── govsa-ds.min.js 
 └──   └── govsa-ds.js 
 
```

## Commone Scss :
```bash
gov.sa-design-system/ 
 ├── fonts/ 
 ├── icon/ 
 ├── img/ 
 ├── scss/ 
 │   ├── components/ 
 │   ├── base/ 
 │   │   └──  body.scss 
 │   ├── styles/ 
 │   │   ├──color/ 
 │   │   │  └── color.scss 
 │   │   ├──typography/ 
 │   │   │  ├── link.scss 
 │   │   │  ├── colors.scss 
 │   │   │  ├── backLink.scss 
 │   │   │  ├── outlins.scss 
 │   │   └──└── list.scss 
 │   │     
 │   └── govsa-ds.scss
 
```


## Scss for Arabic components:
```bash
gov.sa-design-system/ 
 ├── scss-ar/ 
 │   ├── components/ 
 │   │   ├── accordion.scss 
 │   │   ├── alert.scss 
 │   │   ├── button.scss 
 │   │   ├── checkBox.scss 
 │   │   ├── card.scss 
 │   │   ├── dropDown.scss 
 │   │   ├── errorMessage.scss 
 │   │   ├── fileUpload.scss 
 │   │   ├── footer.scss 
 │   │   ├── inputText.scss 
 │   │   ├── radioButton.scss 
 │   │   ├── breadcrumbs.scss 
 │   │   ├── header.scss 
 │   │   ├── menus.scss 
 │   │   ├── pagination.scss 
 │   │   ├── search.scss 
 │   │   ├── table.scss 
 │   │   ├── tabs.scss 
 │   │   └── tag.scss 
 │   ├── styles/ 
 │   │   ├──typography/ 
 │   │   └──└── text.scss 
 │   │     
 │   └── govsa-ds-ar.scss 
 └── pages/ 
     └──thankYou.html
```

## Scss for English components:
```bash
gov.sa-design-system/ 
 ├── scss-en/ 
 │   ├── components/ 
 │   │   ├── accordion.scss 
 │   │   ├── alert.scss 
 │   │   ├── button.scss 
 │   │   ├── checkBox.scss 
 │   │   ├── card.scss 
 │   │   ├── dropDown.scss 
 │   │   ├── errorMessage.scss 
 │   │   ├── fileUpload.scss 
 │   │   ├── footer.scss 
 │   │   ├── inputText.scss 
 │   │   ├── radioButton.scss 
 │   │   ├── breadcrumbs.scss 
 │   │   ├── header.scss 
 │   │   ├── menus.scss 
 │   │   ├── pagination.scss 
 │   │   ├── search.scss 
 │   │   ├── table.scss 
 │   │   ├── tabs.scss 
 │   │   └── tag.scss 
 │   ├── styles/ 
 │   │   ├──typography/ 
 │   │   └──└── text.scss 
 │   │     
 │   └── govsa-ds-en.scss 
 └── pages/ 
     └──thankYou.html

```
       
##The project has the following features:

 - Compilation of ES6 into ES5
 - Converting SASS into CSS
 - Bootstrap 4
 - Image loading and optimization
 - Webpack dev server
 - HMR for hot reloading and faster development
 - post css rtl to generate both directions(ltr-rtl) in one file just change the root (html) element dir attribute and everything should propagate through all css rules.
#### The project is production ready.
 
## Installation
1. Clone the project
2. Go to the project root directory
3. Run `yarn`

## Running on development using [dev server](https://github.com/webpack/webpack-dev-server)

Run `yarn  start:dev` to start to webpack dev server with HMR ready

## For production 

Run `yarn  build` to build project's all assets in `dist` folder.


