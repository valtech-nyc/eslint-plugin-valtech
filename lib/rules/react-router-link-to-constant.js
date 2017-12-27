/**
 * @fileoverview Forbid use of strings in Link.to prop.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Forbid use of literals in React Router's Link component for 'to' prop.",
            category: "React Router",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    errors: {
        NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR: "No literal allowed as route name. Use constant variables instead."
    },

    create: function(context) {

        const rule = this;

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        const getNestedValue = (obj, ...props) => {
            try {
                return props.reduce((childObj, prop) => childObj[prop], obj);
            } catch (e) {
                if (e instanceof TypeError) {
                    return;
                }
                throw e;
            }
        };

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            JSXOpeningElement: node => {
                if (node.name.name === "Link") {
                    const toAttr = node.attributes.filter(attribute => attribute.name.name === "to")[0];

                    if (
                        getNestedValue(toAttr, "value" , "type") === "Literal" ||
                        getNestedValue(toAttr, "value" , "expression", "type") === "Literal"
                    ) {
                        return context.report(toAttr.value, rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_NAME_ERROR);
                    }
                }
            }

        };
    }
};
