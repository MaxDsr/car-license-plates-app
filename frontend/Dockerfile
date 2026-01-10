# Use Node 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with clean install
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# The container will exit after build completes
CMD ["echo", "Build completed successfully!"]

