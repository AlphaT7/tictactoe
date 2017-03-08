const os = require('os'),
      exec = require('child_process').execSync,
      env = process.env;

exports.gen = function () {
  return [{
    name: 'Node.js Version',
    value: process.version.replace('v', '')
  } , {
    name:  'NPM Version',
    value: exec('npm --version').toString().replace(os.EOL, '')
  }, {
    name:  'OS Type',
    value: os.type()
  }, {
    name:  'OS Platform',
    value: os.platform()
  }, {
    name:  'OS Architecture',
    value: os.arch()
  }, {
    name:  'OS Release',
    value: os.release()
  }, {
    name:  'CPU Cores',
    value: os.cpus().length
  }, {
    name:  'Gear Memory',
    value: `${env.OPENSHIFT_GEAR_MEMORY_MB}MB`
  }, {
    name:  'NODE_ENV',
    value: env.NODE_ENV
  }, {
    name:  'NODE_PORT',
    value: env.OPENSHIFT_nodejs_PORT
  }, {
    name:  'NODE_APP_NAME',
    value: env.OPENSHIFT_APP_NAME
  }];
};

exports.poll = function () {
  return [{
    name: 'Free Memory',
    value: `${Math.round(os.freemem() / 1048576)}MB`
  }, {
    name: 'Uptime',
    value: `${os.uptime()}s`
  }];
};
