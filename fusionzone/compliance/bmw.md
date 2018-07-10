# BMW Compliance Styles

Note that all font sizes will probably only work on large screens, and will probably need to be reduced on small and medium screens.

*All font colors must be either black or white, unless otherwise notes.*

## Marquee

### Marquee Image

### Marquee Headline (Typically H1)

```
#marquee-headline {
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1; /* BMW mandate */
  font-size: 59px; /* BMW mandate (44pt = 59px). Typically need to use smaller font-size on smaller screen sizes */
}
```

### Marquee Content

This may or may not be part of the H1:

```
.marquee-content {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 27px;
  line-height: 1.25;
}
```

### Section Titles

```
.section-title {
  text-transform: uppercase;
  font-weight: lighter;
}
```

## Buttons

