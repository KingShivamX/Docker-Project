# 1. Use an official Node.js "base" to start with
FROM node:20-alpine

# 2. Set where our app lives inside the box
WORKDIR /app

# 3. Copy the 'grocery list' (package files) and install ingredients
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your project files
COPY . .

# 5. Tell the box to listen on port 5173 (standard for Vite)
EXPOSE 5173

# 6. Start the app!
CMD ["npm", "run", "dev", "--", "--host"]