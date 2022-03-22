# Renaming Imports

You can rename items as you import them by using the `as` keyword:

```
import { returnHi as sayHi } from './utils.js';
```

Now you will reference this value as `sayHi`.


## Renaming Everything

You can rename *everything* that gets imported by using the `*` symbol:

```
import * as everything from './utils.js';
```

Then, if you `console.log(everything)`, it will return something that *looks like* an object containing all of the exports from that file.