/**
 * @fileoverview Prefer using named export over default export to encourage module naming consistency.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-named-export"),

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
ruleTester.run("prefer-named-export", rule, {

    valid: [
        {
            code: "export const ModuleName = 'MODULE_NAME';"
        },
        {
            code: "export { ModuleName };"
        },
        {
            code: "export class ModuleName {};"
        }
    ],

    invalid: [
        {
            code: "export default ModuleName;",
            errors: [{
                message: rule.errors.PREFER_NAMED_EXPORT_OVER_DEFAULT_EXPORT
            }]
        },
        {
            code: "export default class ModuleName {}",
            errors: [{
                message: rule.errors.PREFER_NAMED_EXPORT_OVER_DEFAULT_EXPORT
            }]
        }
    ]
});
