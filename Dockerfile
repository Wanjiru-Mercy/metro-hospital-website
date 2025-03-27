# Stage 1: Build Stage
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json and yarn.lock./

# Install dependencies with yarn
RUN yarn install

# Copy the rest of the application files
COPY . .

# Run the build
RUN yarn run build

# Stage 2: NGINX Stage
FROM nginx:alpine

# Copy the build artifacts from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy entry script and template NGINX config
COPY nginx/entry.sh /usr/local/bin/entry.sh
COPY nginx/template.conf /etc/nginx/nginx.conf.template

# Ensure entry script is executable
RUN chmod a+x /usr/local/bin/entry.sh

# Expose ports for NGINX
EXPOSE 80

# Set entrypoint
CMD ["/usr/local/bin/entry.sh"]