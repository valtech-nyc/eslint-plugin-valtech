# Prefer using named export over default export to encourage module naming consistency. (prefer-named-export)

In component based application projects, the JavaScript modules have a name that should be consistently used throughout the project.

Default exports allow for importing modules with a different name than it was exported. This leads into naming consistency issues when a component is renamed.

That's why named exports are preferred over default exports in this kind of projects. Also the current tooling benefits from this approach by suggesting modules/components and auto importing them on the fly.

## Rule Details

Examples of **incorrect** code for this rule:

```js

export default ModuleName;

export default class ModuleName {}

```

Examples of **correct** code for this rule:

```js

export const ModuleName = 'MODULE_NAME';

export { ModuleName };

export class ModuleName {};

```

## When Not To Use It

If your project is a library then you'll probably want a default import of the whole library namespace.
