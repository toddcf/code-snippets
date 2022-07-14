# Specifications

The HTML Living Standard exists at https://html.spec.whatwg.org/.


## Rules for Nesting

If you need to know if a given element is allowed to be nested inside another given element, look at the spec for each element and check the potential parent container's "Content Model" and the potential child container's "Categories."

- The "Content Model" will list the types of content that this element can *contain*.
- The "Categories" will list the types of content that this element *is*.

If the same content type is listed in both, the proposed nesting is allowed.

So, for example, if you want to know whether or not you can nest an `<aside>` tag inside a `<section>` tag:

1. Check the `<section>` spec to see what its Content Model is.  (In other words, what types of elements is a `<section>` allowed to *contain*?)  It says "Flow content."
2. Check the `<aside>` spec for its Categories.  (In other words, what type of content *is* an `<aside>` element?)  One of the categories listed is "Flow content."
3. Therefore, *you are allowed to nest an `<aside>` within a `<section>` element*.