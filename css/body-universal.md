# Difference between the BODY selector and UNIVERSAL (*) selector:

1. Universal (*).
  - The universal selector simply selects each and every element on the webpage and applies the styles to all of them (unless we apply a different style somewhere else).
2. Body and HTML.
  - We apply styles to the body/html elements that will be inherited by other elements.
  - These are usually styles related to text, such as:
    - font-family
    - font-size
    - font-weight
  - This is because these properties get inherited by other elements.
    - Once we define them on a parent element, all of the child elements also get these properties automatically.
    - This is why we define these right on the HTML and body elements -- because they are the parent elements of all the other elements.