# Nissan Buttons

## Red Button (Standard)

### HTML

```
<div class="nissan-btn-container">
  <a href="#" class="button expanded nissan-btn">Nissan Button </a>
</div>
```

### CSS:

```
.nissan-btn {
  border-radius: 0.5rem;
  border: 3px solid #900726;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #900726;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #900726;
  background: #c10933;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.nissan-btn:hover,
.nissan-btn:active,
.nissan-btn:focus {
  border: 3px solid #c10933;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #c10933;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## White Button (Inverse)

### HTML

```
<div class="nissan-btn-container">
  <a href="#" class="button expanded nissan-btn-inverse">Nissan Button </a>
</div>
```

### CSS:

```
.nissan-btn-inverse {
  border-radius: 0.5rem;
  border: 3px solid #c10933;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #c10933;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.nissan-btn-inverse:hover,
.nissan-btn-inverse:active,
.nissan-btn-inverse:focus {
  border: 3px solid #900726;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #900726;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #900726;
  background: #c10933;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
```

## Details

Set your button's background color first.

Then plug its hex code into https://www.beautycolorcode.com. (Add `/` and the hex code without the hash after that URL.)

Then choose the monochrome color that is two squares darker than your original hex and use that for the box shadow inset color.

## Version 2

### HTML

```
<div class="nissan-btn-v2-container">
  <a href="/contact-us" class="button expanded nissan-btn-v2">Contact Us </a>
</div>
```

### CSS

```
.nissan-btn-v2 {
  font-size: 1.25rem;
  text-transform: uppercase;
  border: 2px solid #c51b37;
  border-radius: 0.5rem;
}

.nissan-btn-v2:hover,
.nissan-btn-v2:active,
.nissan-btn-v2:focus {
  color: #c51b37;
  background: #eee;
}
```