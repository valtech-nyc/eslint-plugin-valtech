# Check that the filename is the same as the default exported module name. (filename-match-default-export)

Guarantee that module name and filename match for better maintainability.

## Rule Details

Examples of **incorrect** code for this rule:

```js

// filename: '/components/bar.js'
export default class Foo {};

// filename: '/components/bar.js'
export default Foo;

// filename: '/components/foo.js'
export default Foo;

```

Examples of **correct** code for this rule:

```js

// filename: '/components/Foo.js'
export default class Foo {};

// filename: '/components/Foo.js'
export default Foo;

```
