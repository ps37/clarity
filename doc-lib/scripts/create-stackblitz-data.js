#!/usr/bin/env node
const dirTree = require('directory-tree');
const fs = require('fs');
const NPM_DEPS = 'project[dependencies]';

// Arguments
const rootDir = process.argv[2];
const projectTitle = process.argv[3] || 'VCD UI Components example';
const projectDescription = process.argv[4] || 'How to do awesome things with what you got';

/**
 * Returns a JSON object where each key is a form parameter for a StackBlitz Form
 * Note that package.json is read separately and added as {@link NPM_DEPS}
 **/
const output = {
  'project[title]': projectTitle,
  'project[description]': projectDescription,
  'project[template]': 'angular-cli',
};

dirTree(rootDir, { exclude: /\.(git|idea)/ }, file => {
  const fileContents = fs.readFileSync(file.path, 'utf8');
  if (file.path.endsWith('/package.json')) {
    output[NPM_DEPS] = JSON.stringify(JSON.parse(fileContents).dependencies);
  } else {
    output[`project[files][${file.path.replace(rootDir, '')}]`] = fileContents;
  }
});
console.log(JSON.stringify(output, null, 2));
