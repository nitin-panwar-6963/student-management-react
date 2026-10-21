
# Use Node.js 24 LTS Alpine
FROM node:24-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies without requiring package-lock.json
RUN npm install

# Copy application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
