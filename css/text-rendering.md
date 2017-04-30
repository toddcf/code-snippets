# Text Rendering

Allows you to optimize either loading speed, quality, or geometric precision of your site's text.

## Auto (Default)

Lets the browser decide when to optimize for loading speed, quality, or geometric precision while drawing text.

- Be aware that different browsers may interpret this value differently.

## Optimize Speed

Prioritizes speed over legibility and geometric precision.

- Disables kerning and ligatures.

## Optimize Legibility

Prioritizes legibility over loading speed and geometric precision.

- Enables special kerning and optional ligature information that may be contained in the font file.

## Geometric Precision

Prioritizes geometric precision over loading speed and legibility.

- Certain aspects of fonts (such as kerning) don't scale linearly, so Geometric Precision can make those fonts look good.
- When VG font is scaled, the browser calculates pixel size, then rounds to the nearest integer. Geometric Precision allows for more fluid scaling.
- NOTE: Only webkit browsers apply this fluid value. Gecko treats this value just like `optimizeLegibility`.

## Snippets

`html {
	text-rendering: auto;
	text-rendering: optimizeSpeed;
	text-rendering: optimizeLegibility;
	text-rendering: geometricPrecision;
}`