# Honda Buttons

## Standard Blue Button Styling

### HTML

```
<div class="toyota-btn-container">
  <a href="#" class="button expanded toyota-btn">Toyota Button </a>
</div>
```

### Inset Box Shadow:

```
.toyota-btn {
  border-radius: 0.5rem;
  border: 3px solid #ba0818;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #ba0818;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #ba0818;
  background: #eb0a1e;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.toyota-btn:hover,
.toyota-btn:active,
.toyota-btn:focus {
  border: 3px solid #eb0a1e;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #eb0a1e;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Inverse White Styling

### HTML

```
<div class="toyota-inverse-btn-container">
  <a href="#" class="button expanded toyota-inverse-btn">Toyota Inverse Button </a>
</div>
```

### Inset Box Shadow:

```
.toyota-inverse-btn {
  border-radius: 0.5rem;
  border: 3px solid #eb0a1e;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #eb0a1e;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.toyota-inverse-btn:hover,
.toyota-inverse-btn:active,
.toyota-inverse-btn:focus {
  border: 3px solid #ba0818;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #ba0818;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #ba0818;
  background: #eb0a1e;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

Set your button's background color first.

Then plug its hex code into https://www.beautycolorcode.com. (Add `/` and the hex code without the hash after that URL.)

Then choose the monochrome color that is two squares darker than your original hex and use that for the box shadow inset color.