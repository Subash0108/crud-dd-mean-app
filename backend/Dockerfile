FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy source code
COPY . .

# Expose API port
EXPOSE 8080

# Environment variables (override in docker run / compose)
ENV PORT=8080

# Start the server
CMD ["npm", "start"]


