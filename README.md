# GraphicsMagick with HEIF Support in Node.js

This project demonstrates how to use GraphicsMagick with HEIF support in a Node.js application, running inside a Docker container.

## Prerequisites

- Docker
- Docker Compose

## Quickstart

### Step 1: Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### Step2: Build The Docker Image
```sh
docker-compose build
```

### Step 3: Run the Service
To convert an HEIC image to JPEG, run the following command:
```sh
docker-compose run app node index.js <input-file.heic>
```

Replace <input-file.heic> with the path to your HEIC file.

## Directory Structure
Ensure your directory structure looks like this:
```sh
/your-project-directory
  ├── Dockerfile
  ├── docker-compose.yml
  ├── package.json
  ├── package-lock.json
  ├── index.js
  └── test-image.heic
```
