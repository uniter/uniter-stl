# `uniter-stl`: Uniter's STL

This package should include most of Uniter's STL, including a few more complex functions.

STL stands for: *ST*andard *L*ibrary.

Nothing special about it just yet. In order to use it:

```javascript
var php = require("phpruntime");
php.install(require("uniter-stl"))
```

Now, all your comming scripts will have a nice STL with them.

To see what functions are available thus far, please look at: http://npmjs.com/phpjs

Note: There are no plans to keep `phpjs` the de-facto base for the STL. It is very likely that the STL will be split into multiple sub-parts and the functions re-implemented for the best-possible compatibility with Uniter.

But using `phpjs` should serve a good base, for now.
