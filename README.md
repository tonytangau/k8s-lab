# Docker and Kubernetes practice
Using different languges/frameworks (Go, ruby, python, Java, C#, React, Vue, NodeJS etc.) to implement a sentimental scoring web application. The purpose is to create reusable docker images and orchestrated by Kubernetes.

Sentimental logic with REST API
- [x] Go
- [x] Ruby
- [x] Python

Backend REST API
- [x] .Net Core
- [x] Java
- [x] NodeJS

Frontend web app
- [x] React
- [ ] Vue

### Folders
#### k8s
Kubernetes deployment and service configurations.

#### go-logic
Sentimental logic build with Go, using [tonytangau/go-sentiment](https://github.com/tonytangau/go-sentiment).

#### python-logic
Sentimental logic build with python, [flask](http://flask.pocoo.org/) and [TextBlob](https://textblob.readthedocs.io/en/dev/).

#### ruby-logic
Sentimental logic build with Ruby and [Sinatra](http://sinatrarb.com/), use [bundler](https://bundler.io/) to organize gems.

#### react-ui
Frontend web application build with React and [material UI](https://material-ui.com/), bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

#### java-api
REST API build with Java and [Spring](https://spring.io/), build using [Gradle](https://gradle.org/). This API layer is not necessary but for the sake of building Java docker image.

#### dotnet-api
REST API build with .Net Core, and same as `java-api`, the purpose is for building .Net Core docker image.

#### node-api
REST API build with [fastify](https://github.com/fastify/fastify) and [axios](https://github.com/axios/axios), and same as `java-api`, the purpose is for building NodeJS docker image.
