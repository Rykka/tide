var path = require('path')

var config = {
  development: {
    server: {
      port: 3000
    }
  },
  testing: {
    server: {
      port: 3001
    }
  },
  production: {
    server: {
      port: 8080
    }
  },
  base_dir : path.join(__dirname, '..', 'app'),
  public_dir : path.join(__dirname, '..','app', 'public'),
};

// module.exports = config[process.env.NODE_ENV || 'development'];
module.exports = config
