/**
 * @fileoverview Import local JS modules without `../&#39;ing`.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/max-length-import-relative-path"),

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
ruleTester.run("max-length-import-relative-path", rule, {

    valid: [
        {
            code: "import { ModuleName } from 'ModuleName';"
        },
        {
            code: "import { ModuleName } from '../../ModuleName';",
            options: [{
                max: 2
            }]
        }
    ],

    invalid: [
        {
            code: "import { ModuleName } from '../ModuleName';",
            errors: [{
                message: rule.errors.MAX_NUMBER_OF_PARENT_DIRECTORIES_EXCEEDED
                    .replace('{{max}}', 0).replace('{{numberOfParentDirectories}}', 1)
            }]
        },
        {
            code: "import { ModuleName } from '../../ModuleName';",
            errors: [{
                message: rule.errors.MAX_NUMBER_OF_PARENT_DIRECTORIES_EXCEEDED
                    .replace('{{max}}', 0).replace('{{numberOfParentDirectories}}', 2)
            }]
        },
        {
            code: "import { ModuleName } from '../../../ModuleName';",
            errors: [{
                message: rule.errors.MAX_NUMBER_OF_PARENT_DIRECTORIES_EXCEEDED
                    .replace('{{max}}', 2).replace('{{numberOfParentDirectories}}', 3)
            }],
            options: [{
                max: 2
            }]
        }
    ]
});
