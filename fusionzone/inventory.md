# Inventory

## Inventory Count

### HTML

```
<h3 class="used-inv-btn">in stock </h3>
```

### jQuery

```
fZONE.ready(function() {
  $.get("/common/include/count.php?type=new&lotid=TOYOTABERKELEY&version=3&make=Toyota", function(data) {
    $(".new-inv-btn").prepend("<span>" + data + "</span>");
  });
  $.get("/common/include/count.php?type=used&lotid=TOYOTABERKELEY&version=3", function(data) {
    $(".used-inv-btn").prepend("<span>" + data + "</span>");
  });
});
```

Change the Lot ID to match whatever dealer you're designing for. This can be found on the backend under `Settings` > `Inventory`.