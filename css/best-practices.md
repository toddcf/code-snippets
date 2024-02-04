# Best Practices

## Class Naming Conventions

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


This is so that if you want to make stylistic changes to your H1 tags later, you don't need to update your HTML -- just your CSS.