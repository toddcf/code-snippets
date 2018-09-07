# BMW Compliance Styles

Note that all font sizes will probably only work on large screens, and will probably need to be reduced on small and medium screens.

*All font colors must be either black or white, unless otherwise notes.*

## Marquee Image

## Text

### Marquee Headline (Typically H1)

```
#marquee-headline {
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1; /* BMW mandate */
  font-size: 59px; /* BMW mandate (44pt = 59px). Typically need to use smaller font-size on smaller screen sizes */
}
```
Color can be `#fff` or `#000`.

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
Color can be `#fff` or `#000`.

### Promos Headline

```
.promos-headline {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.22;
}
```
Color can be `#fff` or `#000`.

### Promos Content

```
.promos-content {
  font-weight: normal;
  font-size: 19px;
  line-height: 1.43;
}
```
Color can be `#fff` or `#000`.

### Section Titles

```
.section-title {
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 48px;
  line-height: 1.11;
}
```
Color can be `#fff` or `#000`.

### Body Copy

```
.body-copy {
  font-weight: normal;
  font-size: 19px;
  line-height: 1.43;
}
```
Color can be `#fff` or `#000`.

## Legal Content

```
.legal-content {
  color: #666766;
  font-size: 13px;
  line-height: 1.6;
}
```
Font-size can go as low as `11px`.

## Buttons

