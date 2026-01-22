# Use Node 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with clean install
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code
COPY . .

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port (default 3001, can be overridden via PORT env var at runtime)
EXPOSE 3001

# Start the application
CMD ["node", "index.js"]

