# BMW Buttons

## Primary Buttons

Primary buttons are blue, and are to be used sparingly throughout the page.

### HTML

```
<div class="btn-wrapper">
  <a href="#" class="bmw-primary-btn">Primary</a>
</div>
```

### CSS

```
.btn-wrapper {
  position: relative;
  width: 191px; /* BMW mandate */
  height: 51px; /* BMW mandate */
  background: linear-gradient(to bottom, rgba(28,98,197,1) 0%, rgba(28,105,211,1) 50%, rgba(28,105,211,1) 100%, rgba(255,255,255,1) 100%); /* BMW mandate */
  background-position: left top;
  background-size: 100% 200%;
  cursor: pointer;
  transition: all .3s ease;
}

.bmw-primary-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-weight: bold;
  font-size: 14px; /* BMW mandate */
  text-transform: uppercase; /* BMW mandate */
  color: #fff; /* BMW mandate */
}

.btn-wrapper:hover,
.btn-wrapper:active,
.btn-wrapper:focus {
  background-color: transparent;
  background-position: left bottom;
}
```

## Secondary Buttons

Secondary buttons are gray.

### HTML

```
<div class="bmw-secondary-btn-container">
  <a href="#" class="button bmw-secondary-btn">BMW Secondary Button </a>
</div>
```

### CSS

```
.bmw-secondary-btn {
  background: -webkit-gradient(linear, left top, left bottom, from(#666766), to(#979799));
  background: -webkit-linear-gradient(#666766, #979799);
  background: -o-linear-gradient(#666766, #979799);
  background: linear-gradient(#666766, #979799); /* BMW mandate */
}

.bmw-secondary-btn:hover,
.bmw-secondary-btn:active,
.bmw-secondary-btn:focus {
  background: #b5b5b5; /* BMW mandate */
}
```
