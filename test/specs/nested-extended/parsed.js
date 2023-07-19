"use strict";

module.exports = {
  schema: {
    $ref: "referenced-root.yaml",
    objectchild: {
      $ref: "referenced-object-child.yaml",
    },
    arraychild: [
      {
        $ref: "referenced-array-child.yaml",
      },
    ],
  },

  root: {
    const: "root",
  },

  objectchild: {
    const: "object-child",
  },

  arraychild: {
    const: "array-child",
  },
};
