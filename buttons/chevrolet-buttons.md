# Chevrolet Buttons

## Standard Yellow Button Styling

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-yellow-btn">Chevrolet Yellow Button </a>
</div>
```

### CSS:

```
.chevrolet-yellow-btn {
  border-radius: 0.5rem;
  border: 2px solid #000;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #e7ab10;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #e7ab10;
  background: #f1be39;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.chevrolet-yellow-btn:hover,
.chevrolet-yellow-btn:active,
.chevrolet-yellow-btn:focus {
  border: 2px solid #000;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #000;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Standard Blue Button Styling

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-btn">Chevrolet Blue Button </a>
</div>
```

### CSS:

```
.chevrolet-blue-btn {
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

.chevrolet-blue-btn:hover,
.chevrolet-blue-btn:active,
.chevrolet-blue-btn:focus {
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

## Light Blue Button Styling

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-btn-lt-blue">Chevrolet Blue Button </a>
</div>
```

### CSS:

```
.chevrolet-btn-lt-blue {
  border-radius: 0.5rem;
  border: 3px solid #3882ad;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #3882ad;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #3882ad;
  background: #519cc7;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.chevrolet-btn-lt-blue:hover,
.chevrolet-btn-lt-blue:active,
.chevrolet-btn-lt-blue:focus {
  border: 3px solid #519cc7;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #519cc7;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Inverse White Button

### HTML

```
<div class="chevrolet-btn-container">
  <a href="#" class="button expanded chevrolet-white-btn">Chevrolet White Button </a>
</div>
```

### CSS:

THIS PART HAS NOT BEEN UPDATED YET:


```
.chevrolet-white-btn {
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

.chevrolet-white-btn:hover,
.chevrolet-white-btn:active,
.chevrolet-white-btn:focus {
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