module.exports = {
  apps: [{
    name: "expo-dev-server",
    script: "npx",
    args: "expo start --host lan --port 8081",
    cwd: "/tmp/project",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "development"
    }
  }]
};