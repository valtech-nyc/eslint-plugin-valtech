# Check that the filename is the same as the default exported module name. (filename-match-default-export)

Guarantee that module name and filename match for better maintainability.

> Note: we are ignoring `index.js` files.

## Rule Details

Examples of **incorrect** code for this rule:

```js

// filename: '/components/bar.js'
export default class Foo {};

// filename: '/components/bar.js'
export default Foo;

// filename: '/components/foo.js'
export default Foo;

// filename: "/components/foo-bar.js"
export default Foo;

// filename: "/components/Bar.js"
export default connect()(Foo);

// filename: "/components/Bar.js"
export default connect()(hoc()(Foo));

```

Examples of **correct** code for this rule:

```js

// filename: '/components/Foo.js'
export default class Foo {};

// filename: '/components/Foo.js'
export default Foo;

// filename: '/components/foo.js'
// exact: false
export default Foo;

// filename: '/components/foo-bar.js'
// exact: false
export default FooBar;

// filename: "/components/index.js"
export default class Foo {};

// filename: "/components/Foo.js"
export default connect()(Foo);

// filename: "/components/Foo.js"
export default connect()(hoc(Foo));

```

## Options

This rule takes the following option:

`exact`: When set to false the filenames will be striped off of `-`, `_` and turned to lowercase for comparison with module names. Default is *true* if the rule is enabled.

You can set the option like this:

"valtech/filename-match-default-export": [2, { exact: false }]
