# Ford Buttons

Unlike the Honda and Nissan buttons, this button has been altered to give the appearance of a linear gradient background even though it is still a box-shadow inset. (Linear gradients won't work with transitions for hover effects in CSS3.)

## HTML

```
<div class="ford-btn-container">
  <a href="#" class="button expanded ford-btn">Shop F-150 Raptor </a>
</div>
```

## CSS

```
.ford-btn {
  border-radius: 0.5rem;
  /*background: linear-gradient(#2aa6dc, #223e72);*/
  /*border: 3px solid #223e72;*/
  border: 1px solid #000;
  -webkit-box-shadow: inset 0 -1.25rem 3.25rem 0 #223e72;
          box-shadow: inset 0 -1.25rem 3.25rem 0 #223e72;
  background: #2aa6dc;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  -webkit-transition: all .3s !important;
  -o-transition: all .3s !important;
  transition: all .3s !important;
}

.ford-btn:hover,
.ford-btn:active,
.ford-btn:focus {
  /*background: linear-gradient(#fff, silver);*/
  /*border: 3px solid #223e72;*/
  -webkit-box-shadow: inset 0 -1.25rem 3.25rem 0 #808080;
          box-shadow: inset 0 -1.25rem 3.25rem 0 #808080;
  background: #fff;
  color: #2a6bac;
  -webkit-transition: all .3s !important;
  -o-transition: all .3s !important;
  transition: all .3s !important;
}
```