/**
 * @fileoverview Forbid use of strings in Link.to prop.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/react-router-no-literals"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const parserOptions = {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
    }
};
const ruleTester = new RuleTester({parserOptions});

ruleTester.run("react-router-no-literals", rule, {

    valid: [
        {
            code: `<Link to={ROUTES.HOME}>Home</Link>`
        },
        {
            code: `<Route path={ROUTES.HOME}>Home</Route>`
        },
        {
            code: `this.props.history.push(ROUTES.HOME);`
        },
        {
            code: `history.push(ROUTES.HOME);`
        }
    ],

    invalid: [
        {
            code: `<Link to="home">Home</Link>`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        },
        {
            code: `<Link to={"home"}>Home</Link>`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        },
        {
            code: `<Route path="home">Home</Route>`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        },
        {
            code: `<Route path={"home"}>Home</Route>`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        },
        {
            code: `this.props.history.push('home');`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        },
        {
            code: `history.push('home');`,
            errors: [{
                message: rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR
            }]
        }
    ]
});
