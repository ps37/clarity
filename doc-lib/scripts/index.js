#!/usr/bin/env node
const spawnSync = require('child_process').spawnSync;
const fs = require('fs');

// ARGS
const tsConfigFile = process.argv[2];
const entryPoint = process.argv[3];
const outputFile = process.argv[4];

// CONSTS
const UTF8 = 'utf8';
const compodocTempFile = './documentation/documentation.json';

console.log('Running in ', process.cwd());
// Run compodoc in with the passed in config, find the bin folder so we can execute other node scripts
const npmBinExec = spawnSync('npm', ['bin'])
  .stdout.toString()
  .replace('\n', '');
const compodoc = spawnSync('node', [`${npmBinExec}/compodoc`, '-p', `${process.cwd()}/${tsConfigFile}`, '-e', 'json']);
outputFromExec(compodoc, 'compodoc');
const compodocData = JSON.parse(fs.readFileSync(compodocTempFile, UTF8));

// Run create-module-data on the entry point
const moduleDataExec = spawnSync('node', ['node_modules/@vcd/ui-doc-lib/scripts/create-module-data', entryPoint]);
outputFromExec(moduleDataExec, 'create-modules');
const modulesData = JSON.parse(moduleDataExec.stdout.toString());

// Merge Data
const improvedModules = compodocData.modules.map(module => ({
  ...module,
  ...modulesData[module.name],
}));

const out = {
  ...compodocData,
  modules: improvedModules,
};

// Writing to output file
try {
  fs.writeFileSync(outputFile, JSON.stringify(out, undefined, 2), { mode: 0o755, encoding: UTF8 });
} catch (err) {
  // An error occurred
  console.error(err);
}

function outputFromExec(exec, name) {
  console.log(`Console status is ${exec.status}`);
  console.log(`Console out is ${exec.stdout.toString()}`);
  if (exec.status) {
    console.log(`Error running ${name}: ${exec.stderr.toString()}`);
  }
}
// Delete temp file

// Write out
