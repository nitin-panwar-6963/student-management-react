
# Download the base image
FROM node:18

# Set working directory
WORKDIR /app

# Update package lists and clean cache
RUN apt-get update -y && \
    rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
