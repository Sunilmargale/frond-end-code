# Stage 1: Build the React application
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application with nginx
FROM nginx:alpine

# Copy the build files from the previous stage to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration file (if you have one)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8090
EXPOSE 8090

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
