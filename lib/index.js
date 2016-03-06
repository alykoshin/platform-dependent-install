/**
 * Created by alykoshin on 06.03.16.
 */

'use strict';

var path = require('path');
var npm = require('npm');

var mainPkg = require(path.join(process.cwd(), 'package.json'));
var thisPkg = require('../package.json');

var logPrefix = '* ['+thisPkg.name+'] ';


var npmInstall = function(modules, cb) {
  cb = (typeof cb === 'function') ? cb : function() {}; // Sanitize callback

  npm.on('log', function (msg) {
    console.log(msg);
  });

  npm.load(
    /*myConfigObject,*/
    function(err) {
      if (err) {
        console.error(logPrefix+'Unable to load npm', err);
        return cb(err);
      }

      console.log(logPrefix+'Installing packages: ' + modules.join(', '));
      npm.commands.install(modules, function(err, msg) {
        if (err) {
          console.error(logPrefix+'Error installing packages', err);
          return cb(err);
        }
        console.log(logPrefix+msg);
        return cb(null, msg);
      });
    }
  );
};


var install = function(cb) {
  cb = (typeof cb === 'function') ? cb : function() {}; // Sanitize callback
  console.log(logPrefix+'Starting ...');

  console.log(logPrefix+'Checking platform...');
  var platform = process.platform;

  console.log(logPrefix+'Checking modules list...');
  var config = mainPkg.config && mainPkg.config.platformDependentModules;
  var modules = config &&
    config[platform]; // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
  modules = typeof modules === 'string' ? [modules] : modules;

  if (!modules || modules.length === 0) {
    console.warn(logPrefix+'No packages to install, skipping.');
    return cb(null);
  }

  npmInstall(modules, cb);

};


module.exports = {
  install: install
};
