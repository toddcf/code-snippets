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


## Isolating Specific Parts of the Date

Once you've either retrieved or set the date, you can get certain parts of it:

```
let now = new Date();
```

`now.getDay()` will give you a number `0` (Sunday) thru `6` (Saturday).
`now.getDate()` will give you a number between `1` and `31`.
`now.getMonth()` will give you a number between `0` (January) and `11` (December).
`now.getFullYear()` will give you the 4-digit year.