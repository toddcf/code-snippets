# iFrame Ratio

## HTML

```
<div class="iframe-container">
  <!-- 560 x 315 -->
  <iframe src="https://www.youtube.com/embed/80HlM48DbH0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```

## CSS

```
.iframe-container {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
