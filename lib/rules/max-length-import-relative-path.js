/**
 * @fileoverview Import local JS modules without `../'ing`.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const errors = {
    MAX_NUMBER_OF_PARENT_DIRECTORIES_EXCEEDED: 'Max number of parent directories exceeded. Expected less than {{max}} but found {{numberOfParentDirectories}}.'
};

module.exports = {
    meta: {
        docs: {
            description: "Import local JS modules without `../'ing`.",
            category: "Module System",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            {
                type: 'object',
                properties: {
                    max: {
                        type: 'number'
                    }
                },
                additionalProperties: false
            }
        ]
    },

    errors,

    create: context => {

        const PARENT_DIRECTORY = '../';
        const { max = 0 } = context.options[0] || {};

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            ImportDeclaration: node => {
                const numberOfParentDirectories = node.source.value.split(PARENT_DIRECTORY).length - 1;

                if (numberOfParentDirectories > max) {
                    context.report(
                        node.source,
                        errors.MAX_NUMBER_OF_PARENT_DIRECTORIES_EXCEEDED,
                        {
                            max,
                            numberOfParentDirectories
                        }
                    )
                }
            }

        };
    }
};
