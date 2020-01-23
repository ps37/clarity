/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
const fs = require('fs');

const compodocJsonFile = process.argv[2];
const modulesJsonFile = process.argv[3];

const compodocData = JSON.parse(fs.readFileSync(compodocJsonFile, 'utf8'));
const modulesData = JSON.parse(fs.readFileSync(modulesJsonFile, 'utf8'));

const improvedModules = compodocData.modules.map(module => ({
  ...module,
  ...modulesData[module.name],
}));

const out = {
  ...compodocData,
  modules: improvedModules,
};
console.log(JSON.stringify(out, undefined, 2));
