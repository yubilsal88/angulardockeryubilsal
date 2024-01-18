# Stage 1: Build Angular application
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Create the necessary directories
RUN mkdir -p /var/cache/nginx/client_temp && \
    mkdir -p /usr/share/nginx/html /app

# Set permissions on the directories
RUN chown -R nginx:nginx /var/cache/nginx /usr/share/nginx/html /app && \
    chmod -R 777 /var/cache/nginx

# Copy built files from the node stage to the nginx directory
COPY --from=node /app/dist/bookproject /usr/share/nginx/html

# Copy custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Start Nginx without creating a PID file
CMD ["nginx", "-g", "daemon off;"]
