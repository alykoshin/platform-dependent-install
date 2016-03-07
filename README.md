[![npm version](https://badge.fury.io/js/platform-dependent-modules.svg)](http://badge.fury.io/js/platform-dependent-modules)
[![Build Status](https://travis-ci.org/alykoshin/platform-dependent-modules.svg)](https://travis-ci.org/alykoshin/platform-dependent-modules)
[![Coverage Status](https://coveralls.io/repos/alykoshin/platform-dependent-modules/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/platform-dependent-modules?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/platform-dependent-modules/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/platform-dependent-modules)
[![Inch CI](https://inch-ci.org/github/alykoshin/platform-dependent-modules.svg?branch=master)](https://inch-ci.org/github/alykoshin/platform-dependent-modules)

[![Dependency Status](https://david-dm.org/alykoshin/platform-dependent-modules/status.svg)](https://david-dm.org/alykoshin/platform-dependent-modules#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/platform-dependent-modules/dev-status.svg)](https://david-dm.org/alykoshin/platform-dependent-modules#info=devDependencies)


# platform-dependent-modules

Platform dependent modules installation


If you have different needs regarding the functionality, please add a [feature request](https://github.com/alykoshin/platform-dependent-modules/issues).


## Installation

```sh
npm install --save platform-dependent-modules
```

## Usage

Add to `config` section of `package.json` following text:

```json
{
  ...
  "config": {
    "platformDependentModules": {
      "linux": [
        "empty-module"
      ],
      "win32": [
        "empty-module"
      ],
      "darwin": [
        "empty-module"
      ],
      "freebsd": [
        "empty-module"
      ],
      "sunos": [
        "empty-module"
      ]
    }
  ...
}
```

Add to `config` section of `package.json` following text:

```json
{
  ...
  "scripts": {
    "_postinstall": "platform-dependent-modules",
    "postinstall": "npm run _postinstall",
  }
  ...
}
```

Now run only this script: 

```
npm run _postinstall
```

Or during `postinstall` phase of `install`:

```
npm run install
```

To run the example (Linux) 

```sh
$ ./examples/example.sh 
* [platform-dependent-modules] Starting ...
* [platform-dependent-modules] Checking platform...
* [platform-dependent-modules] Checking modules list...
* [platform-dependent-modules] Installing packages: empty-module
platform-dependent-modules@0.0.2 /home/alykoshin/sync/al-projects/dev/npm/platform-dependent-modules
└── empty-module@0.0.2  extraneous

* [platform-dependent-modules] empty-module@0.0.2,/home/alykoshin/sync/al-projects/dev/npm/platform-dependent-modules/node_modules/empty-module
* [platform-dependent-modules] Installation success

```

To run the example (Windows) 

```cmd
> ./examples/example.cmd 
```

## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/platform-dependent-modules) &nbsp; [npmjs.com](https://www.npmjs.com/package/platform-dependent-modules) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/platform-dependent-modules) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/platform-dependent-modules) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/platform-dependent-modules)


## License

MIT
