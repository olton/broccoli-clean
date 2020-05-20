# Broccoli Clean

[![Build Status](https://travis-ci.org/olton/broccoli-clean.svg?branch=master)](https://travis-ci.org/olton/broccoli-clean)

Given an input node, the Broccoli Clean plugin clean a specified node. 
You can specify multiple folders as an array.

## Documentation

### `clean(inputNode, options)`

`inputNode` *{Single node | Nodes array}*

A Broccoli node (formerly: "tree"). A node in Broccoli can be either a string
that references a directory in your project, or array of string of directories, or a node object returned from
running another Broccoli plugin.

If your project has the following file structure:

```shell
.
├── Brocfile.js
├── dist/
└── temp/
```

You can select a subsection of the tree via Clean:

```javascript
const clean = require('broccoli-clean');
const cleanDir = clean('dist');
```
or
```javascript
const clean = require('broccoli-clean');
const cleanDirs = clean(['dist', 'temp']);
```

Export node for Broccoli

```javascript
module.exports = cleanDir;
```

#### Options

`annotation` *{String}*

## Tests

Running the tests:

```bash
npm install
npm test
```

## License

This project a distributed under the MIT license.