# Honda Buttons

## Standard Blue Button Styling

### HTML

```
<div class="honda-btn-container">
  <a href="#" class="button expanded honda-btn">This Button </a>
</div>
```

### Inset Box Shadow:

```
.honda-btn {
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

.honda-btn:hover,
.honda-btn:active,
.honda-btn:focus {
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

## Inverse White Styling

### HTML

```
<div class="honda-btn-container">
  <a href="#" class="button expanded honda-inverse-btn">This Button </a>
</div>
```

### Inset Box Shadow:

```
.honda-inverse-btn {
  border-radius: 0.5rem;
  border: 3px solid #137ec1;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #137ec1;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.honda-inverse-btn:hover,
.honda-inverse-btn:active,
.honda-inverse-btn:focus {
  border: 3px solid #0e6093;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
  background: #137ec1;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

Set your button's background color first.

Then plug its hex code into https://www.beautycolorcode.com. (Add `/` and the hex code without the hash after that URL.)

Then choose the monochrome color that is two squares darker than your original hex and use that for the box shadow inset color.