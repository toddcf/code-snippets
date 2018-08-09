# Honda Buttons

## Standard Blue Button Styling

### HTML

```
<div class="kia-btn-container">
  <a href="#" class="button expanded kia-btn">Kia Button </a>
</div>
```

### Inset Box Shadow:

```
.kia-btn {
  border-radius: 0.5rem;
  border: 3px solid #8d1121;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #8d1121;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #8d1121;
  background: #bb162b;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.kia-btn:hover,
.kia-btn:active,
.kia-btn:focus {
  border: 3px solid #bb162b;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #bb162b;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Inverse White Styling

### HTML

```
<div class="kia-btn-container">
  <a href="#" class="button expanded kia-inverse-btn">Kia Inverse Button </a>
</div>
```

### Inset Box Shadow:

```
.kia-inverse-btn {
  border-radius: 0.5rem;
  border: 3px solid #bb162b;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #bb162b;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.kia-inverse-btn:hover,
.kiaa-inverse-btn:active,
.kia-inverse-btn:focus {
  border: 3px solid #8d1121;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #8d1121;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #8d1121;
  background: #bb162b;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

Set your button's background color first.

Then plug its hex code into https://www.beautycolorcode.com. (Add `/` and the hex code without the hash after that URL.)

Then choose the monochrome color that is two squares darker than your original hex and use that for the box shadow inset color.