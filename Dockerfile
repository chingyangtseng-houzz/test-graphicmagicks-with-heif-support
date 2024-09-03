# Use the base image node:16.18.1-alpine3.16
FROM node:16.18.1-alpine3.16

# Install dependencies
RUN apk add --no-cache \
    graphicsmagick \
    libheif

# Set the working directory
WORKDIR /app
