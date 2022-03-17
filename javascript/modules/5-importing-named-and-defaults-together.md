# How to Import a Combination of Default and Named Exports

The default import *does not* have curly brackets; the named imports *do*:

```
import instructor, { returnHi, lastName, middleName } from './utils.js';
```


