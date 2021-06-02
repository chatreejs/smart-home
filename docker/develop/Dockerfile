FROM node:14-alpine
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
EXPOSE 4200
COPY ./package.json ./package.json
RUN npm install