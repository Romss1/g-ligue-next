FROM node:18

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev"]
