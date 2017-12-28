/**
 * @fileoverview Prefer using named export over default export to encourage module naming consistency.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prefer using named export over default export to encourage module naming consistency.",
            category: "Module System",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    errors: {
        PREFER_NAMED_EXPORT_OVER_DEFAULT_EXPORT: 'Prefer named export over default export.'
    },

    create: function(context) {

        const that = this;

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            ExportDefaultDeclaration: node => context.report(
                node, that.errors.PREFER_NAMED_EXPORT_OVER_DEFAULT_EXPORT
            )

        };
    }
};
