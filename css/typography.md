# Typography

Typography is the art and technique of arranging type to make written language readable and beautiful.

Good typography can make any design look professional.

## Font Size

### Pixels (px)

1. For standard text, use a font between 15px and 25px. Depends on:
  - the typeface you choose.
  - How much text you have.
  - How much you want that text to stand out.
2. For headlines and titles, use a font between 32px and 60px. In some cases, you can go up to 90px.
  - When you use a really big headline, you may want to decrease the font-weight of that text. This makes the text look less bulky, and more modern and elegant. It will also not distract from other text on the page.

You set your default font size as such:

```
html {
  font-size: 20px;
}
```

After that, you use PERCENTAGES for your font sizes. (So if you want something to be 40px, you would set it to 200% instead, because 20px default x 200% = 40px.) This keeps your page RESPONSIVE for different-size screens, and makes everything relative to your default.

### em

An alternative to `px` is `em`, which is a relative size. They are relative to the element they are nested inside of (aka their parent).

`font-size: 2.oem;`

### rem

Whereas `em` is relative to its parent size, `rem` bypasses the parent size and is relative only to the root element on the page. A good way to do proportional fonts without worrying about what's nested inside of what.

`font-size: 2.0rem;`

## Headings

Each webpage should have only one H1 element, meaning only one main heading.

## Spacing

### Characters per Line

45 to 90 characters per line is ideal.

- Exception: Can be more narrow if you're using columns with text.
- Too wide makes it hard on our eyes to travel such a long distance from the end of one line to the beginning of the next line while reading.

### Letter Spacing

`letter-spacing: 1px;`

This, for example, will spread out the space between each individual letter just a bit.

### Word Spacing

`word-spacing: 4px;`

This, for example, will spread out the space between each word (but not each individual letter).

### Line Height

Line height is the vertical distance between lines of text.

Use line height between 120% and 150%.

`line-height: 145%;`

Note that you can use `line-height` to make text *appear* to be vertically centered within a div.

For example, you can set the `line-height` and the element's `height` to be the same value. This will make the line take up the entire height of its parent element, which in turn places the text in the vertical middle.

```
li {
  height: 40px;
  line-height: 40px;
}
```

## Fonts

1. Sans-serif is easier to read.
  - It is:
    - Clean.
    - Modern.
    - Simple.
    - Neutral.
  - Good Google Web Font Examples:
    - Open Sans.
    - Lato.
    - Raleway.
    - Monsterrat.
    - PT Sans.
2. Serif fonts.
  - Used in:
    - Traditional purposes.
    - Storytelling.
    - Long reading (blogs, etc.).
  - Good Google Web Font Examples:
    - Cardo.
    - Merriweather.
    - PT Serif.

### How To Choose A Font

1. Choose a font which reflects the look and feel of your website.
2. Based on that, you can decide between serif or sans-serif.
3. Use only that one typeface. If you do need to pair two different fonts:
  - http://fontpair.co/
  - https://femmebot.github.io/google-type/

## Color

Jonas recommends not going any darker than `color: #333;` for your text.

## Capitalization

### Capitalize FIRST Letter of Each Word:

`text-transform: capitalize;`

### Capitalize EVERY Letter of Every Word:

`text-transform: uppercase;`

## Text Decoration

To get rid of a link's automatic underlining: `text-decoration: none;`