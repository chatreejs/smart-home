# Smart Home

This repository provide Angular Smart Home project with Docker. In this project include docker for development and production

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Usage

1. To run in development mode

   Run Docker Compose to start container (devbox):

   ```sh
   docker compose -f docker-compose.dev.yml up --build
   ```

   You app is now ready. You don't need to re-compose the container because it has hot-reload feature.

   If you want to stop container you can run following command to destroy container.

   ```sh
   docker compose -f docker-compose.dev.yml down
   ```

2. To build and deploy container in production mode

   2.1 Build docker image

   ```sh
   docker build -f docker/production/Dockerfile . -t smart-home:<IMAGE-TAG>
   ```

   `<IMAGE-TAG>` is a tag of image e.g. `smart-home:1.0`, `smart-home:lts`

   2.2 Clear dangling image

   ```sh
   docker container prune -f && docker image prune -f
   ```

   2.3 Run service

   Setup image tag version

   ```sh
   echo 'TAG=<IMAGE-TAG>' > .env
   ```

   If service is running. stop and remove service before run it

   ```sh
   docker stop smart-home
   docker rm smart-home
   ```

   If you don't have external docker network.

   ```
   docker network create web_proxy
   ```

   Run service

   ```sh
   docker-compose up -d
   ```

## Copyright & Disclaimer

© Chanon Treemeth | May 2021
