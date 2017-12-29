/**
 * @fileoverview Check that the filename is the same as the default exported module name.
 * @author Alan Accurso
 */
"use strict";

const path = require('path');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const errors = {
    FILENAME_NOT_MATCHING_DEFAULT_EXPORT: "Filename {{filename}} not matching default export {{moduleName}}."
};

module.exports = {
    meta: {
        docs: {
            description: "Check that the filename is the same as the default exported module name.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    errors,

    create: context => {

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
                const moduleName = getModuleName(node.declaration);

                if (filename !== moduleName) {
                    context.report(
                        node.declaration,
                        errors.FILENAME_NOT_MATCHING_DEFAULT_EXPORT,
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
