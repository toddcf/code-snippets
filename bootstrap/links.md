# Links in Bootstrap 4 Beta

## Remove border on active links

```
/* Remove Bootstrap 4's blue border when buttons are clicked: */
.btn:focus,
.btn:active,
.btn:visited {
	outline: none !important;
	box-shadow: none !important;
	-webkit-box-shadow: none !important;
}
```