module.exports = {
  apps: [{
    name: 'beastie-booze',
    script: './server/app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-117-160-178.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/beastie-booze-key.pem',
      ref: 'origin/main',
      repo: 'git@github.com:BiscuitBae/BeastieBooze.git',
      path: '/home/ubuntu/BeastieBooze',
      // need to figure out how to run these commands without installing locally
      // it might be as simple as adding them after the pm2 command
      'post-deploy': 'npm install && npm run build:prod && npm run-script restart',
       // Environment variables that must be injected in all applications on this env
      env: {
        // add env variables before next deployment
        NODE_ENV: 'production',
        API_KEY: process.env.API_KEY
      }
    }
  }
}