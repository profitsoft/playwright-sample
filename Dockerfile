# Use the Playwright Docker image with version 1.50.0-noble as the base image
FROM mcr.microsoft.com/playwright:v1.50.0-noble

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install the npm dependencies
# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variable for the startup URL
ENV STARTUP_URL=http://host.docker.internal:8083/bo

# Run the Playwright test
CMD npx playwright test
