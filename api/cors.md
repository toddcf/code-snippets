# CORS

CORS = Cross-Origin Resource Sharing

See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

For general security reasons on the internet, two different domains are not allowed to pull data from each other.  (You can't just create a website and then pull data from another -- they may not have intended to share that data.)

CORS is a policy that lets a website whitelist the domains it will allow to pull data from it.


## Troubleshooting

Sometimes you have to use a proxy to get around CORS blocking.  Rather than send your request straight from the browser/website to the endpoint, you first send it to a proxy, which then sends it to the endpoint.  Like this:

```
const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}
```