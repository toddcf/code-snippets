# Colors

## Color theory

(See also: https://webdesign.tutsplus.com/articles/an-introduction-to-color-theory-for-web-designers--webdesign-1437)

1. Use only one base color. (Any color other than black, white, or grey.)
  - Having too many colors on a website gets distracting and messy.
  - Sites that can help you choose your base color:
    - https://flatuicolors.com/
    - http://getuicolors.com/
2. To use multiple colors, use a color wheel tool.
  - Sites that can help you choose color variations:
    - http://www.0to255.com/
    - https://color.adobe.com/create/color-wheel/
    - http://paletton.com
    - https://uigradients.com
3. Use your main colors to call attention to certain aspects of your web page, such as a call to action button. (Maybe green is the main color of your website, and the button is orange.)
  - The second and third colors can complement the main color.
  - Pick a color that stands out and use it to draw attention to a button or any other element on your website.
4. Never use black in your design. Pure black almost never occurs in the real world, and therefore does not feel natural in your design.
5. Psychological effects of colors:
  - Red:
    - Power.
    - Passion.
    - Strength.
    - Excitement.
    - Brighter tones are more energetic.
    - Darker shades are more powerful and elegant.
  - Orange:
    - Draws attention without being as overpowering as red.
    - Cheerfulness.
    - Creativity.
    - Friendliness.
    - Confidence.
    - Courage.
  - Yellow:
    - Energy.
    - Happiness.
    - Liveliness.
    - Curiosity.
    - Intelligence.
    - Brightness.
  - Green:
    - Harmony.
    - Balance.
    - Nature.
    - Life.
    - Health.
    - Wealth.
  - Blue:
    - Patience.
    - Peace.
    - Trustworthiness.
    - Stability.
    - Professionalism.
    - Trust.
    - Honor.
  - Purple:
    - Power.
    - Nobility.
    - Wealth.
    - Wisdom.
    - Royalty.
    - Nobility.
    - Luxury.
    - Mystery.
  - Pink:
    - Romance.
    - Passivity.
    - Care.
    - Peace.
    - Affection.
  - Brown:
    - Relaxation.
    - Confidence.
    - Earthiness.
    - Nature.
    - Durability.
    - Comfort.
    - Reliability.
    - Men especially love blue.

## CSS Color Codes

color: #000000; /*black*/
color: #ffffff; /*white*/

Primaries (#RRGGBB):
	#ff0000 = red;
	#00ff00 = green;
	#0000ff = blue;

Combinations:
	color: #ff00ff; /*violet (red + blue)*/
	color: #ffff00; /*yellow (red + green)*/
	color: #00ffff; /*turquoise (blue + green)*/

For each color:
Min: 0 (hex 0);
Max: 255 (hex ff);

Greys:
Just make RR, GG, and BB each have the same value. For example:
	color: #4d4d4d; /*dark grey*/
	color: #a2a2a2; /*light grey*/

Efficiency:
If all six values in a hex code are the same, you can write them in just three digits. For example:
#555555 condenses to #555;

Transparencies (rgba):
rgba(29, 167, 23, 0.75) = 75% transparency for that color;