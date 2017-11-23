# When to Use .text() vs. .html()

`.text();` is "html-safe," meaning it will treat the input strictly as text. If any HTML is entered, it will not be run as HTML code, just displayed as text. This is a good safeguard on user input fields so that users aren't able to change the content of your site.

`.html();` allows you to enter HTML code and have it be run as such. (So a list will actually be displayed as a list, for example.)