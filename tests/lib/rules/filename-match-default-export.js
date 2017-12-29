/**
 * @fileoverview Check that the filename is the same as the default exported module name.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/filename-match-default-export"),

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
ruleTester.run("filename-match-default-export", rule, {

    valid: [
        {
            code: "export default class Foo {};",
            filename: "/components/Foo.js"
        },
        {
            code: "export default Foo;",
            filename: "/components/Foo.js"
        },
        {
            code: "export default Foo;",
            filename: "/components/foo.js",
            options: [{
                exact: false
            }]
        },
        {
            code: "export default FooBar;",
            filename: "/components/foo-bar.js",
            options: [{
                exact: false
            }]
        },
        {
            code: "export default class Foo {};",
            filename: "/components/index.js"
        }
    ],

    invalid: [
        {
            code: "export default class Foo {};",
            filename: "/components/bar.js",
            errors: [{
                message: rule.errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT
                    .replace('{{filename}}', 'bar')
                    .replace('{{moduleName}}', 'Foo')
            }]
        },
        {
            code: "export default Foo;",
            filename: "/components/bar.js",
            errors: [{
                message: rule.errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT
                    .replace('{{filename}}', 'bar')
                    .replace('{{moduleName}}', 'Foo')
            }]
        },
        {
            code: "export default Foo;",
            filename: "/components/foo.js",
            errors: [{
                message: rule.errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT
                    .replace('{{filename}}', 'foo')
                    .replace('{{moduleName}}', 'Foo')
            }]
        },
        {
            code: "export default Foo;",
            filename: "/components/foo-bar.js",
            errors: [{
                message: rule.errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT
                    .replace('{{filename}}', 'foo-bar')
                    .replace('{{moduleName}}', 'Foo')
            }]
        }
    ]
});
