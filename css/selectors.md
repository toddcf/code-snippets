# CSS Selectors

## Children

If you have more than one element with the same class name, you can use `first-child` or `last-child` to apply rules to only one or the other:

```
.steps-box {
	margin-top: 30px;
}

.steps-box:first-child {

}

.steps-box:last-child {
	
}
```