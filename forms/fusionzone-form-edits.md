# Form Edits

## HTML

```
<div id="styled-form">
	<h3>Contact Us </h3>
	<!--[%formWidget?formName=contact%]-->
</div>
```

## CSS

```
/* STYLED FORM */
#styled-form {
  background:rgba(0,0,0,.78);
  color:#fff;
  padding:1rem;
  border-radius: 5px;
}

#styled-form h3 {
  font-size: 1.5rem;
}

#styled-form h5 {
  display:none;
}

#styled-form .callout {
  background:transparent;
  color:#fff;
  margin:0;
  padding:0;
}

#styled-form .callout label {
  color:#fff;
}

#styled-form .callout input {
  background:transparent;
  border:1px solid #fff;
  color:#fff;
  border-radius:5px;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
}

#styled-form label[name=preferred] {
  font-size:9px;
}

#styled-form label[name=comments] {
  /*display:none;*/
}

#styled-form textarea {
  border-radius: 5px;
  background: transparent;
  color: #fff;
}

#styled-form input.button {
  width:100%;
  border-radius:5px;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border: 2px solid #0e6093;
  background: #137ec1;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem #0e6093;
  color:#fff;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

#styled-form input.button:hover,
#styled-form input.button:focus,
#styled-form input.button:active {
  border: 2px solid #137ec1;
  -webkit-box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
          box-shadow: inset 0.1rem 0.1rem 1.5rem 0.3rem silver;
  background: #fff;
  color: #137ec1;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

#styled-form small {
  font-size:40%;
}

#styled-form input[type=checkbox] {
  margin:0;
}
/* END STYLED FORM */
```