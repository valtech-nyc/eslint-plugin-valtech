/**
 * @fileoverview Forbid use of strings in Link.to prop.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/react-router-link-to-constant"),

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

ruleTester.run("react-router-link-to-constant", rule, {

    valid: [
        {
            code: `<Link to={ROUTES.HOME}>Home</Link>`
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
        }
    ]
});
