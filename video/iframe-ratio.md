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
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
}

.iframe-container iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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
  background-image: -webkit-gradient(linear, left top, right bottom, from(#00264d), to(#004d99));
  background-image: -webkit-linear-gradient(top left, #00264d, #004d99);
  background-image: -o-linear-gradient(top left, #00264d, #004d99);
  background-image: linear-gradient(to bottom right, #00264d, #004d99);
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;
}

.video-container p {
  color: #fff;
  font-size: 16px;
  left: 50%;
  -webkit-margin-after: 0;
          margin-block-end: 0;
  -webkit-margin-before: 0;
          margin-block-start: 0;
  margin: 0;
  -webkit-margin-end: 0;
          margin-inline-end: 0;
  -webkit-margin-start: 0;
          margin-inline-start: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
  width: 90%;
}
```