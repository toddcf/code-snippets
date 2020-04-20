# Script Tags

You can put a script tag inside your HTML file to either switch to and run JavaScript code directly, or to link to a separate JavaScript file.

## Run JavaScript Code Directly

```
<script>
  console.log('Hello.');
</script>
```


## Linking to Separate JavaScript Files

Instead of writing your actual JavaScript code in between the tags, you can use `src` to link to a separate JavaScript file:

```
<script src="./some.js"></script>
```

NOTE: You still need the closing JavaScript tag, even though no code will go between the tags.



You do not need to include a type unless you are using modules:

```
<script type="text/javascript">

</script
```