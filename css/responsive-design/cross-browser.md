# Cross-Browser Compatibility

Each browser interprets HTML and CSS slightly differently, which means you need to test your site in each one to verify how it looks.

## Browsers

### Google Chrome

CSS Browser Prefix: `-webkit-`

Example: `-webkit-border-radius: 25px;`

### Microsoft Internet Explorer

CSS Browser Prefix (all): `-ms-`

Example: `-ms-border-radius: 25px;`

#### IE11

#### IE10

#### IE9

#### IE6/7/8

### Mozilla Firefox

CSS Browser Prefix: `-moz-`

Example: `-moz-border-radius: 25px;`

### Apple Safari

CSS Browser Prefix: `-webkit-`

Example: `-webkit-border-radius: 25px;`

### Opera

CSS Browser Prefix: `-o-`

Example: `-o-border-radius: 25px;`

### iOS

CSS Browser Prefix: `-webkit-`

Example: `-webkit-border-radius: 25px;`

### Android

CSS Browser Prefix: `-webkit-`

Example: `-webkit-border-radius: 25px;`

## CSS Autoprefixer

1. Select all text in your CSS file `CTRL` + `A`.
2. `CTRL` + `SHIFT` + `P`.
3. Select `Autoprefix CSS`.
4. The autoprefixer will go through and add the appropriate prefix to only the rules that require it. Done! Save your file.

## Scripts for older versions of IE

1. Go to https://www.jsdelivr.com/
2. Search for `respond`.
3. Copy and paste the `<script>` link into the end of your `index.html` file.

## Scripts for pre-HTML5 html

1. Go to https://www.jsdelivr.com/
2. Search for `html5shiv`.
3. Copy and paste the `<script>` link into the end of your `index.html` file.

## Scripts for Pre-CSS3 Browsers

1. Go to https://www.jsdelivr.com/
2. Search for `selectivizr`.
3. Copy and paste the `<script>` link into the end of your `index.html` file.