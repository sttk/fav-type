'use strict';

var fs = require('fs');
var path = require('path');
var encoding = 'utf-8';
var outdir = __dirname;
var outfile = path.resolve(outdir, 'fav-type.test.js');

function listFiles (rpath, extensions) {
  extensions = Array.isArray(extensions) ? extensions : [extensions];
  var apath = path.resolve(__dirname, rpath);
  return fs.readdirSync(apath, encoding).filter(isExtension).map(resolve);

  function isExtension (filename) {
    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];
      if (filename.slice(-ext.length) === ext) {
        return true;
      }
    }
  }

  function resolve (filename) {
    return path.resolve(apath, filename);
  }
}

function bundleFile (filepath) {
  var apath = path.resolve(__dirname, filepath);
  var filename = path.basename(filepath);
  var data = fs.readFileSync(apath, encoding);
  data = data.replace(/[^\r\n]*require *\([^\r\n]*/g, '');
  data = '(function(){\n' + data + '\n})();\n';
  fs.appendFileSync(outfile, data, encoding);
}

fs.truncateSync(outfile);
listFiles('..', '.test.js').forEach(bundleFile);
listFiles('../../src', '.test.js').forEach(bundleFile);
listFiles('../../src/lib', '.test.js').forEach(bundleFile);

