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
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}