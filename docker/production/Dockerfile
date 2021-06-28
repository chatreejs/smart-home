
# STAGE 1: Build
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . /app
RUN npm run ng -- build --output-path=dist

# STAGE 2: Run
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html