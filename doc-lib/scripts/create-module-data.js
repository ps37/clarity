'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
var ts = require('typescript');
var NG_MODULE = 'NgModule';
/**
 * Get the source code for files containing NgModules
 * @param fileNames Entry points to be scanned
 * @param options Options to be passed to `ts.createProgram`
 * @return A map keyed by the module class names
 */
function generateDocumentation(fileNames, options) {
  var program = ts.createProgram(fileNames, options);
  var output = {};
  var sourceFile;
  // Visit every sourceFile in the program
  for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
    sourceFile = _a[_i];
    if (sourceFile.fileName.includes('.module.ts')) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, visit);
    }
  }
  return output;
  /** visit nodes finding exported classes */
  function visit(node) {
    if (isClassDeclarationNode(node)) {
      if (isNgModuleClass(node)) {
        var module_1 = serializeModule(node);
        output[module_1.className] = module_1;
      }
    } else if (node.kind === ts.SyntaxKind.ModuleDeclaration) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit);
    }
  }
  function isNgModuleClass(cls) {
    return !!cls.decorators.find(function(decorator) {
      return decorator.expression.getFirstToken(sourceFile).text === NG_MODULE;
    });
  }
  function serializeModule(node) {
    return {
      className: node.name.escapedText.toString(),
      path: sourceFile.fileName,
      sourceCode: sourceFile.getFullText(),
    };
  }
  function isClassDeclarationNode(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
  }
}
var modules = generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
});
console.log(JSON.stringify(modules, undefined, 4));
