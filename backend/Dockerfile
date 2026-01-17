# 1. Use an official Node.js "base" to start with
FROM node:20-alpine

# 2. Set where our app lives inside the container
WORKDIR /app

# 3. Copy the 'grocery list' (package files) and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your project files
COPY . .

# 5. Tell the container to listen on port 5000 (our Express server port)
EXPOSE 5000

# 6. Set environment variable for production
ENV NODE_ENV=production

# 7. Start the Express server!
CMD ["npm", "start"]
