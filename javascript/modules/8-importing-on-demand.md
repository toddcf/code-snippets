# Importing on Demand

For performance reasons, you may want to wait an load a module closer only if/when it is actually needed.

In this example, we only want to load an object containing a list of currencies when a "Load Currencies" button is clicked.

This is the object, in a module called `currency-list.js`:

```
const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

export default currencies;
```


Then, in a module called `handlers.js`, you import the entire `currency-list.js` module (inside an async function, which is also being exported):

```
export async function handleButtonClick(event) {
  const currenciesModule = await import('./currency-list.js');
  console.log(currenciesModule.default); // .default gives you the currencies object within the module.
}
```


Then, in a module called `scripts.js`, you import that async function and use an event listener to fire it on the button clicks you want:

```
import { handleButtonClick } from "./handlers.js";
const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);
```


(In the network call, you'll be able to see that the `currency-list.js` file is not listed until the button is actually clicked.)

NOTE: Once it is clicked the first time, it is cached, so it will run faster on each subsequent click.

And if the `currency-list.js` module had both a default and a named export, like this . . .

```
const currencies = {
  // full list here
}

export const localCurrency = 'USD';
export default currencies;
```


. . . you could import both -- and even destructure them -- as follows:

```
export async function handleButtonClick(event) {
  const {localCurrency, default:currency} = await import('./currency-list.js');
  console.log(localCurrency, currency);
}
```

NOTE: `default` is a keyword, which is why you have to rename it (to `currency`, in this case).