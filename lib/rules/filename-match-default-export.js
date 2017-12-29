/**
 * @fileoverview Check that the filename is the same as the default exported module name.
 * @author Alan Accurso
 */
"use strict";

const path = require('path');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Check that the filename is the same as the default exported module name.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            {
                type: 'object',
                properties: {
                    exact: {
                        type: 'boolean'
                    }
                },
                additionalProperties: false
            }
        ]
    },

    errors: {
        FILENAME_NOT_MATCHING_DEFAULT_EXPORT: "Filename {{filename}} not matching default export {{moduleName}}."
    },

    create(context) {

        const { exact = true } = context.options[0] || {};

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        const getModuleName = declaration => declaration.name || declaration.id.name;
        const getFilenameWithoutExtension = filename => {
            const filenameWithExtension = path.basename(filename);
            const extension = path.extname(filename);

            return filenameWithExtension.replace(extension, "");
        };

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            ExportDefaultDeclaration: node => {
                const filename = getFilenameWithoutExtension(context.getFilename());
                if (filename === 'index') {
                    return;
                }

                const moduleName = getModuleName(node.declaration);
                let namesMatch = filename === moduleName;

                if (!exact) {
                    namesMatch = filename.replace(/-|_/g, '').toLowerCase() === moduleName.toLowerCase();
                }

                if (!namesMatch) {
                    context.report(
                        node.declaration,
                        this.errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT,
                        {
                            filename,
                            moduleName
                        }
                    );
                }
            }

        };
    }
};
