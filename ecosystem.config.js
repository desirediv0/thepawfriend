module.exports = {
  apps: [
    {
      name: 'paws-friend',
      cwd: '/root/thepawfriend',
      script: 'pnpm',
      args: 'start',
      env: {
        PORT: 7009,
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
      },
      error_file: '/root/.pm2/logs/paws-friend-error.log',
      out_file: '/root/.pm2/logs/paws-friend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      max_memory_restart: '500M',
    },
  ],
}
