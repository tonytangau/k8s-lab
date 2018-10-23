FROM openjdk:8-jdk-alpine

ENV LOGIC_URL http://service-logic-lb
ENV APP_ROOT /app

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY build/libs/java-api-0.1.0.jar $APP_ROOT

EXPOSE 8080
CMD ["java", "-jar", "java-api-0.1.0.jar", "--logic.url=${LOGIC_URL}"]
