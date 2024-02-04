# CSS Class

## Best Practice

A CSS class should describe the nature of the content, not the style of the content.

In other words, this would be discouraged:

```
<h1 class="bold">
```


Instead, use the class to describe what the content is, and then you can apply a bold style to that class via CSS:

```
<h1 class="h1">
```

```
.h1 {
  font-weight: bold;
}
```