# Radio Buttons

Same as checkboxes, except only one can be selected at a time.

To create a group of radio buttons, they all have to have the same `name` in their HTML:

```
<label>
  <input id="radioA" type="radio" name="q1" value="radio a">
  Answer A
</label>

<label>
  <input id="radioB" type="radio" name="q1" value="radio b">
</label>
```