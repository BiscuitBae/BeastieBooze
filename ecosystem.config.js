module.exports = {
  apps: [{
    name: 'beastie-booze',
    // maybe add build here or change this to npm start command but seems fine to me
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
      // also maybe just not running the build after we deploy
      // maybe this is where we can add a build for production environments if needed
      'post-deploy': 'npm install &&  npm run build:prod && pm2 startOrRestart ecosystem.config.js',
       // Environment variables that must be injected in all applications on this env
      env: {
        // im guessing the stuff from the env file
        NODE_ENV: 'production'
      }
    }
  }
}