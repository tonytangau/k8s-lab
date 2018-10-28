FROM node:alpine

ENV APP_ROOT /app

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY . $APP_ROOT

EXPOSE 8080
CMD ["npm", "run", "start"]