# Fluid Typography

Full article on fluid typography: https://www.smashingmagazine.com/2016/05/fluid-typography/
Font size ratio calculator: https://type-scale.com/

## Root font-size

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

## Font-size ratios

Now that your root font-size minimum and maximum have been set, it's time to set the ratios for the font-sizes between different headings. You will set two ratios:

- A smaller ratio for small screens, since small screens do not allow for much variation in font-size between headings.
- A larger ratio for large screens, since large screens will allow for more variation in font-size between headings.

Use https://type-scale.com/ to help choose the best ratio for your project.

### Set font-size ratio for smaller screens

Since we code from small to large screen sizes, let's start with the ratio for small screens. We'll use the Minor Second ratio, which is `1.067`.

1. Your body-text can never be smaller than 16px -- the same as 1em -- so we'll set that first:

```
.body-text {
  font-size: 1em;
}
```


2. Next, we work up the line from `h6` to `h1`, multiplying by the ratio of 1.067 each time. (Note that `h6` will be the same size as `.body-text`.)

```
.h6 {
  font-size: 1em;
}

.h5 {
  font-size: 1.067em;
}

.h4 {
  font-size: 1.138em;
}

.h3 {
  font-size: 1.215em;
}

.h2 {
  font-size: 1.296em;
}

.h1 {
  font-size: 1.383em;
}
```

### Set the font-size ratio for larger screens

1. Same thing, except this time we'll use a Perfect Fourth ratio (1.333). (Note that we can leave out the elements with values of `1em`, such as `.body-text` and `.h6`, since those are not changing.)

```
.h5 {
  font-size: 1.333em;
}

.h4 {
  font-size: 1.777em;
}

.h3 {
  font-size: 2.369em;
}

.h2 {
  font-size: 3.157em;
}

.h1 {
  font-size: 4.209em;
}
```

2. Determine the breakpoint where you want to switch to the larger ratio. For now, let's use `800px`, since that's where the font-sizes become fluid, anyway. Put all of the larger ratio code inside that breakpoint:

```
@media (min-width: 800px) {

  .h5 {
    font-size: 1.333em;
  }

  .h4 {
    font-size: 1.777em;
  }

  .h3 {
    font-size: 2.369em;
  }

  .h2 {
    font-size: 3.157em;
  }

  .h1 {
    font-size: 4.209em;
  }

}
```

You can always change where this breakpoint is if it's not working well for your project.