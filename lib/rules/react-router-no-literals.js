/**
 * @fileoverview Forbid use of literals in React Router components to reference route paths.
 * @author Alan Accurso
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Forbid use of literals in React Router components to reference route paths.",
            category: "React Router",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    errors: {
        NO_LITERAL_ALLOWED_AS_ROUTE_PATH_ERROR: "No literal allowed as route path. Use constant variables instead."
    },

    create: function(context) {

        const rule = this;

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function getNestedValue(obj, ...props) {
            try {
                return props.reduce((childObj, prop) => childObj[prop], obj);
            } catch (e) {
                if (e instanceof TypeError) {
                    return;
                }
                throw e;
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            JSXOpeningElement: function(node) {
                if (node.name.name === "Link" || node.name.name === "Route") {
                    const toAttr = node.attributes.filter(attribute => {
                        return attribute.name.name === "to" || attribute.name.name === "path";
                    })[0];

                    if (
                        getNestedValue(toAttr, "value" , "type") === "Literal" ||
                        getNestedValue(toAttr, "value" , "expression", "type") === "Literal"
                    ) {
                        return context.report(
                            toAttr.value.expression || toAttr.value,
                            rule.errors.NO_LITERAL_ALLOWED_AS_ROUTE_PATH_ERROR
                        );
                    }
                }
            }

        };
    }
};