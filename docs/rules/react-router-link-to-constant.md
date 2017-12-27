# Forbid use of literals in React Router's Link component for 'to' prop. (react-router-link-to-constant)

This rule aims to encourage the declaration of route names as constant symbols.

## Rule Details

Examples of **incorrect** code for this rule:

```js

<Link to="home">Home</Link>

<Link to={"home"}>Home</Link>

```

Examples of **correct** code for this rule:

```js

<Link to={ROUTES.HOME}>Home</Link>

```
