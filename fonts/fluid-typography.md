# Fluid Typography

Full article on fluid typography: https://www.smashingmagazine.com/2016/05/fluid-typography/
Font size ratio calculator: https://type-scale.com/

## Set Up

### Set HTML font-size

Set `html` to a fluid unit:

```
html {
  font-size: 2vw;
}
```

All `rem` and `em` units will now be fluid.

### Calculate the minimum font-size

The browser default font-size will be `16px`. We don't want the `html` font-size to ever be smaller than that, so we only want the `2vw` we just set to kick in at the breakpoint where 2% of the screen width would be equal to `16px`. To calculate this:

1. (font-size) = (screen width) * (root font-size)
2. 16px = (screen width) * 0.02
3. 16px / 0.02 = (screen width)
4. `800px = (screen width)`

Therefore, we are going to put our `html` font-size inside of a media query for 800px and above:

```
@media (min-width: 800px) {
  html {
    font-size: 2vw;
  }
}
```

The end result is that the `html` font size is always 16px on screen widths up to and including 800px. As the screen width continues to increase beyond 800px, the `html` font size increases right along with it, always equaling 2% of the screen width.

### Calculate the maximum font-size

You may not want the font sizes to keep growing indefinitely, however.

For example, all of your main content (including all text) is probably contained within an invisible centered column that grows no wider than 1140px (Bootstrap 4) or 1440px. If this is the case, you want the font sizes to stop growing at this point even though the width of the entire screen may continue to grow.

Or you may simply know that going above a specific font-size will look ridiculous.

If it's the centered column you want to calculate by, the formula is the same; we're just solving for font-size instead of screen width:

1. (font-size) = (screen width) * (root font-size)
2. (font-size) = 1440px * 0.02
3. `(font-size) = 28.8px`

Therefore, we are going to add another media query for the `html` font-size above 1440px:

```
@media (min-width: 1440px) {
  html {
    font-size: 28.8px;
  }
}
```

The end result is that above 1440px, the `html` root font-size ceases to be fluid. It has reached its maximum font-size, and will not continue to grow even if the screen width does.




2. Set your body text to the browser default size of 16px: `.body-text {font-size: 16px;}`
3. Set all other font sizes on the page using `em` units, which will be calculated from the `html` value you set. (Use the font size ratio calculator (link above) to decide on the right ratio for your project, and then plug in those `em` values to your other elements.)