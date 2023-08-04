FROM node:16-alpine

WORKDIR /react_vite

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]
