# Docker and Kubernetes practice
Using different languges/frameworks (Go, ruby, python, Java, C#, React, Vue, NodeJS etc.) to implement a sentimental scoring web application. The purpose is to create reusable docker images and orchestrated by Kubernetes.

Sentimental logic with REST API
- [x] Go
- [x] Ruby
- [ ] Python

Backend REST API
- [ ] Java
- [ ] .Net Core
- [ ] NodeJS

Frontend web app
- [x] React
- [ ] Vue

---
### Folders
#### k8s
Kubernetes deployment and service configurations.

#### go-logic
Sentimental logic build with Go, using [tonytangau/go-sentiment](https://github.com/tonytangau/go-sentiment).

#### ruby-logic
Sentimental logic build with Ruby and [Sinatra](http://sinatrarb.com/), use [bundler](https://bundler.io/) to organize gems.

#### react-ui
Frontend web application build with React and [material UI](https://material-ui.com/), bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).