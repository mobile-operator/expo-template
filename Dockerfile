# Use Node.js base image
FROM node:20-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    python3-pip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install PM2 globally
RUN npm install -g pm2

# Create workspace directory
WORKDIR /workspace

# Copy the entire template
COPY . /workspace/template/

# Set working directory for template
WORKDIR /workspace/template

# Install dependencies
RUN npm install

# Install Expo CLI globally
RUN npm install -g @expo/cli

# Expose the Expo development server port
EXPOSE 8081

# Default command - this will be overridden by Daytona
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]