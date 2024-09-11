# Use the Playwright Docker image with version 1.38.0 based on Ubuntu Focal
FROM mcr.microsoft.com/playwright:v1.38.0-focal

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install the npm dependencies
# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Update the package list and install Xvfb (X virtual framebuffer) for headless testing
RUN apt-get update && apt-get install -y \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Install Playwright dependencies and browsers
RUN npx playwright install --with-deps

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variable for the startup URL
ENV STARTUP_URL=http://host.docker.internal:8083/bo

# Start Xvfb (X virtual framebuffer) and then run Playwright tests
CMD Xvfb :99 -screen 0 1280x1024x24 & npx playwright test
