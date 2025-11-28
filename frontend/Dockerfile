### Stage 1: Build Angular app
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Build Angular app for production
RUN npm run build

### Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built app from the build stage
COPY --from=build /usr/src/app/dist/angular-15-crud /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Nginx default command
CMD ["nginx", "-g", "daemon off;"]


