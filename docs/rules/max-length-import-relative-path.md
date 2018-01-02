# Import local JS modules without `../'ing`. (max-length-import-relative-path)

Writing `../../` can be a pain when importing modules from relative directories.

Webpack can help by setting the `NODE_PATH` env variable to your `src/` folder and importing modules relative from the source folder.

## Rule Details

Examples of **incorrect** code for this rule:

```js

import { ModuleName } from '../ModuleName';

import { ModuleName } from '../../ModuleName';

// max: 2
import { ModuleName } from '../../../ModuleName';

```

Examples of **correct** code for this rule:

```js

import { ModuleName } from 'ModuleName';

// max: 2
import { ModuleName } from '../../ModuleName';

```

### Options

This rule takes the following option:

`max`: The maximum number of parent directories allowed. Anything over will trigger the rule. Default is 0 if the rule is enabled and no max is specified.

You can set the option like this:

```json
"valtech/max-length-import-relative-path": [2, {"max": 2}]
```

## Further Reading

https://jaketrent.com/post/import-js-module-without-dot-dot-slash/
