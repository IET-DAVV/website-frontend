FROM node:20.19.6-alpine

WORKDIR /app

# Copy only dependency files first
COPY package-lock.json package-lock.json ./
COPY package.json package.json ./

COPY . .

RUN npm install

# Copy full source


RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

