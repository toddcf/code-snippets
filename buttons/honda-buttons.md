# Honda Buttons

## HTML

```
<div class="btn-container">
  <a href="#" class="button expanded this-btn">This Button </a>
</div>
```

## Inset Box Shadow:

```
.this-btn {
  border-radius: 0.5rem;
  border: 3px solid #0e6093;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
  background: #137ec1;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.this-btn:hover,
.this-btn:active,
.this-btn:focus {
  border: 3px solid #137ec1;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #137ec1;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

Set your button's background color first.

Then plug its hex code into https://www.beautycolorcode.com. (Add `/` and the hex code without the hash after that URL.)

Then choose the monochrome color that is two squares darker than your original hex and use that for the box shadow inset color.