# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Serve the app with a lightweight web server
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default NGINX config to use port 5173
RUN sed -i 's/listen  .*/listen 5173;/g' /etc/nginx/conf.d/default.conf

# Expose port 5173 (React/Vite default)
EXPOSE 5173

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
