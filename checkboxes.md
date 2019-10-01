# Checkboxes

Same as radio buttons, except the user is allowed to select more than one answer.

```
<fieldset>
  <legend>What are you doing here?</legend>
  <label for="nothing">
    <input type="checkbox" name="doing" value="nothing" id="nothing">Nothing
  </label>
  <br>
  <label for="none">
    <input type="checkbox" name="doing" value="none" id="none">None of your business
  </label>
  <br>
  <label for="everything">
    <input type="checkbox" name="doing" value="everything" id="everything">Everything
  </label>
</fieldset>
```


## Checked

The `checked` attribute selects one of the checkboxes by default when the page is loaded.

```
<input type="checkbox" checked>Default Selection
```


## Animated high checkboxes

https://tympanus.net/Development/AnimatedCheckboxes/