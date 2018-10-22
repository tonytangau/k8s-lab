FROM ruby:2.5-alpine

ENV APP_ROOT /app

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY Gemfile Gemfile.lock $APP_ROOT/
RUN bundle install
COPY . $APP_ROOT

EXPOSE 5000
CMD ["bundle", "exec", "rackup"]
