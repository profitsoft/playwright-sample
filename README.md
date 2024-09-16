# playwright-sample

## Overview

This repository contains a sample project that demonstrates how to use Playwright to automate web browser interactions.

## Running Tests in Docker

To run the tests in a Docker container, follow these steps:

1. **Build the Docker Image:**

   ```sh
   docker build -t pw .
   ```

2. **Run the Docker Container:**

   ```sh
   docker run --network="host" -e STARTUP_URL="http://host.docker.internal:8081/bo" pw
   ```

   _You can use any URL as the `STARTUP_URL` environment variable. The `--network="host"` flag is used to allow the
   Docker container to access the host machine's network._

3. **View Test Results:**

   After the tests have run, copy the results archive from the Docker container:

   ```sh
   docker cp <container_id>:/usr/src/app/allure-results .
   ```

   Then, serve the results using Allure:

   ```sh
   npx allure serve .\allure-results\
   ```

