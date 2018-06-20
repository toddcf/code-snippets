#Lists

## Multiple Columns

https://www.w3schools.com/css/css3_multiple_columns.asp

###HTML

Add a class to the *parent container* of the `<ul>`:

```
<div class="multi-column">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

###CSS

```
.multi-column {
  column-count: 2;
}
```