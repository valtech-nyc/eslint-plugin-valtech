# Forbid use of literals in React Router components to reference route paths. (react-router-link-to-constant)

This rule aims to encourage the declaration of route names as constant symbols.

## Rule Details

Examples of **incorrect** code for this rule:

```js

<Route path="home">Home</Link>

<Route path={"home"}>Home</Link>

<Link to="home">Home</Link>

<Link to={"home"}>Home</Link>

this.props.history.push('home');

history.push('home');

```

Examples of **correct** code for this rule:

```js

<Route path={ROUTES.HOME}>Home</Link>

<Link to={ROUTES.HOME}>Home</Link>

<Route {...props}>Home</Route>

this.props.history.push(ROUTES.HOME);

history.push(ROUTES.HOME);

```
