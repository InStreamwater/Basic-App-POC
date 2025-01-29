# Step 1: Use Node.js for building the React app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy only the package files to leverage Docker cache for dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire application
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use a lightweight server to serve the React app
FROM nginx:stable-alpine

# Copy the built React app from the previous stage to nginx's default folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the necessary port
EXPOSE 80

# Add a health check for monitoring
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]