# Date Object

The `Date` object lets you get and set dates and times.


## Getting the Current Date

```
let now = new Date();
```

This gives you everything, from big to small: year, month, date, day of the week, hour, minute, second, and millisecond.


## Setting the Date

You can set the date by passing arguments into the Date object. The format is as follows, with the month being one less than usual because the count starts at zero. (January = `0`, December = `11`)

```
let setDate = new Date( year, month, date );
```

For example:

```
let christmas = new Date( 2019, 11, 25 );
```

(Remember, December = `11`.)

You can also set the date as such:

```
let christmas = new Date( 'december 25 2019' );
```

### setDate()

You can also use the `setDate()` function to set the date -- but this is only setting the date of the month. For example, `setDate(3)` would set the date to the third day of the month.

You can also use `setDate()` to do calculations. For example, you might want to set the date to 90 days from now. You would get the current date and then add 90 to it, and set the date to that result:

```
let now = new Date();

now.setDate( now.getDate() + 90 );
```


## Isolating Specific Parts of the Date

Once you've either retrieved or set the date, you can get certain parts of it:

```
let now = new Date();
```

`now.getDay()` will give you a number `0` (Sunday) thru `6` (Saturday).
`now.getDate()` will give you a number between `1` and `31`.
`now.getMonth()` will give you a number between `0` (January) and `11` (December).
`now.getFullYear()` will give you the 4-digit year.

Note that because `getMonth()` returns a number, if you want to get the names of the months, you would need to create an array with values corresponding to these numbers:

```
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let now = new Date();
console.log( months[now.getMonth()] );
```

Same for days of the week:

```
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let now = new Date();
console.log( days[now.getDay()] );
```


## getTime()

Doing math with dates can be tricky because of leap years, different months having a different number of days, time zones, am vs pm, etc.

Instead, JavaScript has a `getTime()` function that breaks it all down to milliseconds, counting up from January 1, 1970 to now. (January 1, 1970 is the standard zero date for computers, decided upon due to the limitations of early computers and the size of the numbers they could deal with.)

In short, `getTime()` converts the current date from an unwieldy object into a single (but long) number that is easier to do calculations with.

```
let now = new Date();
console.log( now.getTime() );
```

## Doing Calculations with Dates

Here are some examples of working with dates, particularly calculating the number of days between two dates.

```
var sailDate = new Date ('08/19/2021');
```

sailDate is `Thu Aug 19 2021 00:00:00 GMT-0700 (Pacific Daylight Time)`

Or a more reliable approach is to break date into an series of properties. This is helpful because some browsers do not support certain date strings. Plus hours, minutes, seconds, and even timezones, can be added when needed.

```
var sailDateStr = '08/19/2021';
var sailDateArr = sailDateStr.split('/');
var sailDate = new Date(parseInt(sailDateArr[2]), parseInt(sailDateArr[0])-1, parseInt(sailDateArr[1]), 23, 59, 59); // same as new Date(YYYY, MM, DD, H, Min, Sec)
```

sailDate object is `Thu Aug 19 2021 23:59:59 GMT-0700 (Pacific Daylight Time)`

Date objects can be compared:

```
var sailDate = new Date ('08/19/2021');
var currentDate = new Date();
var timeDiff = (sailDate - currentDate) / (1000 * 60 * 60 * 24);
```

`sailDate` - `currentDate` will return a unix timestamp (number of milliseconds) of the time between the two dates. 

`1000 * 60 * 60 * 24` is the number of milliseconds in a 24 hour period.

`timeDiff` is `481.5399631712963` days (or whatever the math works out to be with today's current date and time).