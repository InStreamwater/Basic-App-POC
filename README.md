mongodb > backend > frontend
Tool Version for frontend
node —version
–
v16.20.2
npm —version
–
8.19.4
Tool version for backend
node —version
–
v23.6.1
npm —version
–
11.0.0
Docker
docker pull dhruv2910/frontend-app:v1
docker run -d -p 80:80 --name react-app-container dhruv2910/frontend-
app:v1
docker pull dhruv2910/backend-app:v1
docker run -d -p 5001:5001 --name node-app-container dhruv2910/backend-
app:v1
docker pull mongo:6
docker run -d --name mongodb-container -p 27017:27017 mongo:6
Test these 3 public images setup on local only on Docker env — keep k8s on
hold as of now.
Here, FE & BE images are custom images built from our ReactJs & NodeJs
folders code. Where as MongoDB image is ready-made publicly available
image.
Understand the code for both FE & BE folders, docker process & then plan k8s
specific processes.
