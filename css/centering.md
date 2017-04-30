# Centering

## Centering a Div Horizontally

```
margin-left: auto;
margin-right: auto;
```

## Centering a Div Vertically

`top: 50%;` (This aligns the top of the element with the vertical center of its parent div.)
```
transform: translate(-50%);
```
This is 50% of the element's height, so it shifts the element back up by that amount.
In other words, it "centers the center" of the element instead of centering the top of the element.

This same technique can be used for horizontal centering as well.

## Centering a Div Both Horizontally and Vertically

```
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%);
```