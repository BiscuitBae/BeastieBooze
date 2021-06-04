const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  apps: [{
    name: 'beastie-booze',
    script: './server/app.js',
    env: {
      NODE_ENV: 'development',
      API_KEY: process.env.API_KEY,
      ATLAS_URL: process.env.ATLAS_URL,
      HOST: process.env.HOST,
      KEY: process.env.KEY
    },
    env_production: {
      NODE_ENV: 'production',
      API_KEY: process.env.API_KEY,
      ATLAS_URL: process.env.ATLAS_URL,
      HOST: process.env.HOST,
      KEY: process.env.KEY
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: process.env.HOST,
      key: process.env.KEY,
      ref: 'origin/main',
      repo: 'git@github.com:BiscuitBae/BeastieBooze.git',
      path: '/home/ubuntu/BeastieBooze',
      // need to figure out how to run these commands without installing locally
      // it might be as simple as adding them after the pm2 command
      // taking out these 2 for now since they break the deploy:
      // npm install && npm run build:prod
      'post-deploy': 'npm run-script restart',
      env: {
        NODE_ENV: 'development',
        API_KEY: process.env.API_KEY,
        ATLAS_URL: process.env.ATLAS_URL
      },
      env_production: {
        NODE_ENV: 'production',
        API_KEY: process.env.API_KEY,
        ATLAS_URL: process.env.ATLAS_URL
      }
    }
  }
}