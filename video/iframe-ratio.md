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

## Placeholder Code

```
<div class="video-container">
  <p>Video will go here once it has been provided by dealer</p>
</div>
```

```
.video-container {
  background: #555;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 1rem;
}

.video-container p {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
  width: 90%;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
```