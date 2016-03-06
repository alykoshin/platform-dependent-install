/**
 * Created by alykoshin on 06.03.16.
 */

'use strict';

var pkg = require('../package.json');
var npm = require('npm');

var prefix = '* ['+pkg.name+'] ';


var npmInstall = function(modules, cb) {
  cb = typeof cb === 'function' ? cb : function() {}; // Sanitize callback

  npm.on('log', function (msg) {
    console.log(msg);
  });

  npm.load(
    /*myConfigObject,*/
    function(err) {
      if (err) {
        console.error(prefix+'Unable to load npm', err);
        return cb(err);
      }

      console.log(prefix+'Installing packages: ' + modules.join(', '));
      npm.commands.install(modules, function(err, msg) {
        if (err) {
          console.error(prefix+'Error installing packages', err);
          return cb(err);
        }
        console.log(prefix+'Installation finished: ' + msg);
        return cb(null, msg);
      });
    }
  );
};


var install = function(cb) {
  cb = typeof cb === 'function' ? cb : function() {}; // Sanitize callback
  console.log(prefix+'Starting ...');

  console.log(prefix+'Checking platform...');
  var platform = process.platform;

  console.log(prefix+'Checking modules list...');
  var config = pkg.config && pkg.config.platformDependentModules;
  var modules = config &&
    config[platform]; // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
  modules = typeof modules === 'string' ? [modules] : modules;

  if (!modules || modules.length === 0) {
    console.warn(prefix+'No packages to install, skipping.');
    return cb(null);
  }

  npmInstall(modules);

};


module.exports = {
  install: install
};
