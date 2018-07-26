# Honda Buttons

## Standard Blue Button Styling

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-btn">Chevrolet Button </a>
</div>
```

### CSS:

```
.chevrolet-btn {
  border-radius: 0.5rem;
  border: 3px solid #e7ab10;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #e7ab10;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #e7ab10;
  background: #f1be39;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.chevrolet-btn:hover,
.chevrolet-btn:active,
.chevrolet-btn:focus {
  border: 3px solid #f1be39;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #f1be39;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Inverse White Styling

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-inverse-btn">Chevrolet Inverse Button </a>
</div>
```

### CSS:

THIS PART HAS NOT BEEN UPDATED YET:


```
.chevrolet-inverse-btn {
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

.chevrolet-inverse-btn:hover,
.chevrolet-inverse-btn:active,
.chevrolet-inverse-btn:focus {
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