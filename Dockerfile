
# Use Node.js 24 LTS Alpine
FROM node:24-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

