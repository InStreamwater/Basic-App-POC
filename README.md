# Project Setup Notes

## Tech Stack
- **Database:** MongoDB
- **Backend:** Node.js
- **Frontend:** React.js

## Tool Versions

### Frontend
```sh
node --version
# v16.20.2

npm --version
# 8.19.4
```

### Backend
```sh
node --version
# v23.6.1

npm --version
# 11.0.0
```

## Docker Setup

### Pull and Run Frontend Container
```sh
docker pull dhruv2910/frontend-app:v1
docker run -d -p 80:80 --name react-app-container dhruv2910/frontend-app:v1
```

### Pull and Run Backend Container
```sh
docker pull dhruv2910/backend-app:v1
docker run -d -p 5001:5001 --name node-app-container dhruv2910/backend-app:v1
```

### Pull and Run MongoDB Container
```sh
docker pull mongo:6
docker run -d --name mongodb-container -p 27017:27017 mongo:6
```

## Development Plan
1. **Test the three public images** in a local Docker environment.
2. **Keep Kubernetes (k8s) on hold** for now.
3. **Understand the frontend and backend codebases** for React.js and Node.js.
4. **Review the Docker process** to ensure proper execution.
5. **Plan for Kubernetes deployment** after successful local testing.
