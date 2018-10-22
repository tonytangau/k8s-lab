FROM microsoft/dotnet:2.1-sdk-alpine

ENV APP_ROOT /app

WORKDIR $APP_ROOT
COPY . $APP_ROOT
RUN dotnet publish -c Release -o out

EXPOSE 8080
ENTRYPOINT ["dotnet", "run"]