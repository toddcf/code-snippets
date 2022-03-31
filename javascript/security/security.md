# Security


## Server Side Security

A lot of website security comes from running your code on the server side:

- Encryption
- Certificates
- Firewalls
- Whitelisting IPs
- Rate Limiting


## Client Side Security

There are still things you can do on the frontend/browser/client-side to at least make sure you're not accidentally committing security violations.

JavaScript is totally public because you can view it in the browser DevTools.  Therefore, never put sensitive information in your source code (client side JavaScript).  You can obfuscate or encrypt it, but as long as it's in the browser, there will always be somebody out there who can reverse engineer it.


### API Keys

Sometimes it's okay to put API keys in the browser -- other times it's not.  CORS typically restricts you when it is not.  A Google Map API key is fine to put in client side because Google will limit those per domain or per visitor.


### Links to Private Downloads

(Unclear, but I think Wes Bos is saying those are not a good idea to put client side.)


### Prices

Prices are not safe to put client side.  If you put a price in a button, someone could change that price before clicking the button.  Prices should be calculated on the server, where they cannot be messed with.


### XSS (Cross Site Scripting)

Sanitize your inputs.

Text content is fine, but any time you are taking input from a user and generating HTML with it, you must first sanitize it.

For example, any time you are using the following:

- innerHTML
- insertAdjacentHTML

It is possible for a user to hijack an image tag (or create one and add it to the page) by adding `onload=""` or `onerror=""` and then inserting whatever JavaScript they want within those quotes, like this:

```
<img src="" alt="" onload="alert('hacked')">
```

They can do a similar thing by typing an image tag into an input field on your site.

To protect your site against what type of text or data is allowed to be added to your site, you want to sanitize it.  There is a library called Dom Purify that helps with this.  It takes in a string and scrubs it of potential threats.


### Sending/Receiving Data with Encryption

Whenever you are sending/receiving data (for example, using an API), make sure you are using HTTPS (not HTTP).  Without HTTPS (encryption), the data transmission can be read by anyone who intercepts it.  Encrypting it means that even if someone intercepts it, it will just look like gibberish.

Most APIs these days are now encrypted.