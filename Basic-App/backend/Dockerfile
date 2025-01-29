# Use a lightweight Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Set non-root user for security
RUN addgroup appgroup && adduser -S -G appgroup appuser
USER appuser

# Expose the necessary port (optional, for documentation purposes)
EXPOSE 3001

# Specify a health check for reliability
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Run the application
CMD ["node", "index.js"]